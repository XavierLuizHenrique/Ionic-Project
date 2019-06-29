import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-configuracoes',
  templateUrl: 'configuracoes.html',
})
export class ConfiguracoesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


ionViewDidLoad() {
   console.log('ionViewDidLoad ConfiguracoesPage');
}

irParaUnidadeMedida(){
  this.navCtrl.push('UnidadeMedidaPage');

}
irParaPais(){
  this.navCtrl.push('PaisPage');
}
irParaTermos(){
  this.navCtrl.push('TermosPage');
}
irParaParceiros(){
  this.navCtrl.push('ParceirosPage');
}
irParaAjuda(){
  this.navCtrl.push('AjudaPage');
}
irParaInformacoesPessoais(){
  this.navCtrl.push('InformacoesPessoaisListaPage');
}
irParaCadastrarInformacoesPessoais(){
  this.navCtrl.push('InformacoesPessoaisCadastroPage');
}

  }