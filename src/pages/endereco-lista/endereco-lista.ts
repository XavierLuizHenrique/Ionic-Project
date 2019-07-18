import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import firebase from 'firebase';
import { Endereco } from '../../model/endereco';

@IonicPage()
@Component({
  selector: 'page-endereco-lista',
  templateUrl: 'endereco-lista.html',
})
export class EnderecoListaPage {

  listaDeEndereco : Endereco[] = [];
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

  var ref = firebase.firestore().collection("endereco");

  ref.get().then(query =>{
    query.forEach(doc =>{
      let e = new Endereco();
      e.setDados(doc.data());
      e.id = doc.id;
      this.listaDeEndereco.push(e);
    });
  });
}

EnderecoCadastro(){
  this.navCtrl.push('EnderecoCadastroPage')
}

remove(obj : Endereco){
  let ref = firebase.firestore().collection("endereco");
  ref.doc(obj.id).delete()
    .then(()=>{
      this.listaDeEndereco = [];
      this.getList();
    }).catch(()=>{
      console.log('Erro ao atualizar');
    })
}

atualiza(obj : Endereco){
  this.navCtrl.push('EnderecoVisualizaPage',{'endereco' : obj})
}

irNovoEndereco(){
  this.navCtrl.push('NovoEnderecoPage');
}

irParaConfiguracoes(){
  this.navCtrl.push('ConfiguracoesPage');
}

} 