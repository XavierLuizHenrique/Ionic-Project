import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import firebase from 'firebase';
import { Suplemento } from '../../model/suplementos';
import { Pedido } from '../../model/pedido';

import { StorageService } from '../../service/storage.service';
import { Item } from '../../model/item';


@IonicPage()
@Component({
  selector: 'page-suplemento-lista',
  templateUrl: 'suplemento-lista.html',
})
export class SuplementoListaPage {

  pedido : Pedido = new Pedido();


  listaDeSuplementos : Suplemento[] = [];
  firestore = firebase.firestore(); //Inicio um instancia do banco 
  settings = {timestampsInSnapshots : true} //linha sempre utilizada(padrão)
  
constructor(public navCtrl: NavController,
  public navParams: NavParams,
  public menu : MenuController,
  public storageServ : StorageService) {

    this.firestore.settings(this.settings); // Aplicar Conf.padrão

    this.pedido.itens = [];
    this.pedido = this.storageServ.getCart();
}

ionViewDidLoad() {
  //console.log('ionViewDidLoad InicioPage');
  this.menu.enable(true)
  this.getList();
}

getList() {

  var ref = firebase.firestore().collection("suplementos");

  ref.get().then(query =>{
    query.forEach(doc =>{
      let s = new Suplemento();
      s.setDados(doc.data());
      s.id = doc.id;
      this.listaDeSuplementos.push(s);
    });
  });
}

SuplementosCadastro(){
  this.navCtrl.push('SuplementosCadastroPage')
}

remove(obj : Suplemento){
  let ref = firebase.firestore().collection("suplementos");
  ref.doc(obj.id).delete()
    .then(()=>{
      this.listaDeSuplementos = [];
      this.getList();
    }).catch(()=>{
      console.log('Erro ao atualizar');
    })
}

atualiza(obj : Suplemento){
  this.navCtrl.push('suplementosVisualizaPage',{'suplementos' : obj})
}

irAparelho(){
  this.navCtrl.push('AparelhoListaPage');
}
irAcessorio(){
  this.navCtrl.push('AcessorioListaPage');
}
irSuplemento(){
  this.navCtrl.push('SuplementoListaPage');
}
irParaConfiguracoes(){
  this.navCtrl.push('ConfiguracoesPage');
}
irNovoSuplemento(){
  this.navCtrl.push('NovoSuplementoPage');
}
irCarrinho(){
  this.navCtrl.push('FinalPedidoPage');
}


// FUNÇÕES CARRINHO

addCarrinho(produto : Suplemento){
  this.pedido = this.storageServ.getCart();
  let add = true;

  let i = new Item();
  i.produto = produto;
  i.quantidade = 1;

  if(this.pedido==null){ // caso pedido esteja vazio
    this.pedido = new Pedido(); // cria um novo pedido
    this.pedido.itens = []; // cria a lista de itens
  }
    
  this.pedido.itens.forEach(p => {
      if(p.produto.id == produto.id){
        
        add = false;
        console.log(add)
      }
    });
  
  if(add===true) this.pedido.itens.push(i);
    
  this.storageServ.setCart(this.pedido);
    
}
} 