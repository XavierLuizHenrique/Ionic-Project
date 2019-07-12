import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import firebase from 'firebase';
import { suplementos } from '../../model/suplementos';

@IonicPage()
@Component({
  selector: 'page-suplemento-lista',
  templateUrl: 'suplemento-lista.html',
})
export class SuplementoListaPage {

  listaDeSuplementos : suplementos[] = [];
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

  var ref = firebase.firestore().collection("suplementos");

  ref.get().then(query =>{
    query.forEach(doc =>{
      let s = new suplementos();
      s.setDados(doc.data());
      s.id = doc.id;
      this.listaDeSuplementos.push(s);
    });
  });
}

SuplementosCadastro(){
  this.navCtrl.push('SuplementosCadastroPage')
}

remove(obj : suplementos){
  let ref = firebase.firestore().collection("suplementos");
  ref.doc(obj.id).delete()
    .then(()=>{
      this.listaDeSuplementos = [];
      this.getList();
    }).catch(()=>{
      console.log('Erro ao atualizar');
    })
}

atualiza(obj : suplementos){
  this.navCtrl.push('SuplementosVisualizaPage',{'suplementos' : obj})
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

} 