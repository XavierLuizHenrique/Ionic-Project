import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import firebase from 'firebase';
import { Livros } from '../../model/livros';


@IonicPage()
@Component({
  selector: 'page-lista-livros',
  templateUrl: 'lista-livros.html',
})
export class ListaLivrosPage {

  listaDeLivros : Livros[] = [];
  firestore = firebase.firestore();
  settings = {timestampsInSnapshots : true}


  
constructor(public navCtrl: NavController,
  public navParams: NavParams,
  public menu : MenuController) {

    this.firestore.settings(this.settings);
}

ionViewDidLoad() {
  this.menu.enable(true)
  this.getList();
}

getList() {

  var ref = firebase.firestore().collection("livros");

  ref.get().then(query =>{
    query.forEach(doc =>{
      let l = new Livros();
      l.setDados(doc.data());
      l.id = doc.id;
      this.listaDeLivros.push(l);
    });
  });
}

novoLivros(){
  this.navCtrl.push('LivrosPage')
}

remove(obj : Livros){
  let ref = firebase.firestore().collection("livros");
  ref.doc(obj.id).delete()
    .then(()=>{
      this.listaDeLivros = [];
      this.getList();
    }).catch(()=>{
      console.log('Erro ao atualizar');
    })
}

atualiza(obj : Livros){
  this.navCtrl.push('LivrosVisualizaPage',{'livros' : obj})
}

}
