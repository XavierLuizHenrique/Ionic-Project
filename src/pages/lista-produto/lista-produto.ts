import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import firebase from 'firebase';
import { Produto } from '../../model/produto';


@IonicPage()
@Component({
  selector: 'page-lista-produto',
  templateUrl: 'lista-produto.html',
})
export class ListaProdutoPage {

  listaDeProdutos : Produto[] = [];
  firestore = firebase.firestore(); //Inicio um instancia do banco 
  settings = {timestampsInSnapshots : true} //linha sempre utilizada(padrão)

  
  
constructor(public navCtrl: NavController,
  public navParams: NavParams,
  public menu : MenuController) {

    this.firestore.settings(this.settings); // Aplicar Conf.padrão
}

ionViewDidLoad() {
  //console.log('ionViewDidLoad InicioPage');
  this.menu.enable(true)
  this.getList();
}

getList() {

  var ref = firebase.firestore().collection("produto");

  ref.get().then(query =>{
    query.forEach(doc =>{
      let p = new Produto();
      p.setDados(doc.data());
      p.id = doc.id;
      this.listaDeProdutos.push(p);
    });
  });
}

novoProduto(){
  this.navCtrl.push('NovoProdutoPage')
}

remove(obj : Produto){
  let ref = firebase.firestore().collection("produto");
  ref.doc(obj.id).delete()
    .then(()=>{
      this.listaDeProdutos = [];
      this.getList();
    }).catch(()=>{
      console.log('Erro ao atualizar');
    })
}

atualiza(obj : Produto){
  this.navCtrl.push('ProdutoVisualizaPage',{'produto' : obj})
}

} 
