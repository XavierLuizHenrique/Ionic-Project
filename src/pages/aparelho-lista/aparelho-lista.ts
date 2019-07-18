import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import firebase from 'firebase';
import { Aparelho } from '../../model/aparelho';

@IonicPage()
@Component({
  selector: 'page-aparelho-lista',
  templateUrl: 'aparelho-lista.html',
})
export class AparelhoListaPage {

    listaDeAparelhos : Aparelho[] = [];
    firestore = firebase.firestore(); //Inicio um instancia do banco 
    settings = {timestampsInSnapshots : true} //linha sempre utilizada(padrão)
    
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public menu : MenuController) {
  
      this.firestore.settings(this.settings); // Aplicar Conf.padrão
  }
  
  ngOnInit() {
    //console.log('ionViewDidLoad InicioPage');
    this.menu.enable(true)
    this.getList();
  }
  
  getList() {
  
    var ref = firebase.firestore().collection("aparelho");
  
    ref.get().then(query =>{
      query.forEach(doc =>{
        let p = new Aparelho();
        p.setDados(doc.data());
        p.id = doc.id;
        this.listaDeAparelhos.push(p);
      });
    });
  }
  
  AparelhoCadastro(){
    this.navCtrl.push('AparelhoCadastroPage')
  }
  
  remove(obj : Aparelho){
    let ref = firebase.firestore().collection("aparelho");
    ref.doc(obj.id).delete()
      .then(()=>{
        this.listaDeAparelhos = [];
        this.getList();
      }).catch(()=>{
        console.log('Erro ao atualizar');
      })
  }
  
  atualiza(obj : Aparelho){
    this.navCtrl.push('AparelhoVisualizaPage',{'aparelho' : obj})
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
  irNovoAparelho(){
    this.navCtrl.push('AparelhoCadastroPage');
  }
  
  } 