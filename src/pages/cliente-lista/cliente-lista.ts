import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import firebase from 'firebase';
import { Cliente } from '../../model/cliente';

@IonicPage()
@Component({
  selector: 'page-cliente-lista',
  templateUrl: 'cliente-lista.html',
})
export class ClienteListaPage {

  listaDeCliente : Cliente[] = [];
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

  var ref = firebase.firestore().collection("cliente");

  ref.get().then(query =>{
    query.forEach(doc =>{
      let c = new Cliente();
      c.setDados(doc.data());
      c.id = doc.id;
      this.listaDeCliente.push(c);
    });
  });
}

ClienteCadastro(){
  this.navCtrl.push('ClienteCadastroPage')
}

remove(obj : Cliente){
  let ref = firebase.firestore().collection("cliente");
  ref.doc(obj.id).delete()
    .then(()=>{
      this.listaDeCliente = [];
      this.getList();
    }).catch(()=>{
      console.log('Erro ao atualizar');
    })
}

atualiza(obj : Cliente){
  this.navCtrl.push('ClienteVisualizaPage',{'cliente' : obj})
}

irNovoCliente(){
  this.navCtrl.push('NovoClientePage');
}

} 