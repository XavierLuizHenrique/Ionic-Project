import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import firebase from 'firebase';
import { InformacoesPessoais } from '../../model/informacoespessoais';

@IonicPage()
@Component({
  selector: 'page-informacoes-pessoais-lista',
  templateUrl: 'informacoes-pessoais-lista.html',
})
export class InformacoesPessoaisListaPage {

  listaDeInformacoesPessoais : InformacoesPessoais[] = [];
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

  var ref = firebase.firestore().collection("informacoespessoais");

  ref.get().then(query =>{
    query.forEach(doc =>{
      let i = new InformacoesPessoais();
      i.setDados(doc.data());
      i.id = doc.id;
      this.listaDeInformacoesPessoais.push(i);
    });
  });
}

InformacoesPessoaisCadastro(){
  this.navCtrl.push('InformacoesPessoaisCadastroPage')
}

remove(obj : InformacoesPessoais){
  let ref = firebase.firestore().collection("informacoespessoais");
  ref.doc(obj.id).delete()
    .then(()=>{
      this.listaDeInformacoesPessoais = [];
      this.getList();
    }).catch(()=>{
      console.log('Erro ao atualizar');
    })
}

atualiza(obj : InformacoesPessoais){
  this.navCtrl.push('InformacoesPessoaisVisualizaPage',{'informacoespessoais' : obj})
}

} 