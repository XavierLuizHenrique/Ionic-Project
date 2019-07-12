import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import firebase from 'firebase';
import { Acessorio } from '../../model/acessorio';

@IonicPage()
@Component({
  selector: 'page-acessorio-lista',
  templateUrl: 'acessorio-lista.html',
})
export class AcessorioListaPage {


    listaDeAcessorio : Acessorio[] = [];
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
  
    var ref = firebase.firestore().collection("Acessorio");
  
    ref.get().then(query =>{
      query.forEach(doc =>{
        let a = new Acessorio();
        a.setDados(doc.data());
        a.id = doc.id;
        this.listaDeAcessorio.push(a);
      });
    });
  }
  
  CadastroAcessorio(){
    this.navCtrl.push('CadastroAcessorioPage')
  }
  
  remove(obj : Acessorio){
    let ref = firebase.firestore().collection("acessorio");
    ref.doc(obj.id).delete()
      .then(()=>{
        this.listaDeAcessorio = [];
        this.getList();
      }).catch(()=>{
        console.log('Erro ao atualizar');
      })
  }
  
  atualiza(obj : Acessorio){
    this.navCtrl.push('AcessorioVisualizaPage',{'acessorio' : obj})
  }
  irParaConfiguracoes(){
    this.navCtrl.push('ConfiguracoesPage');
  }
  
} 

