import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-final-pedido',
  templateUrl: 'final-pedido.html',
})
export class FinalPedidoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinalPedidoPage');
  }
  irParaConfiguracoes(){
    this.navCtrl.push('ConfiguracoesPage');
  }
  IrParaEndereco(){
    this.navCtrl.push('EnderecoPage');
  }
  IrParaLoja(){
    this.navCtrl.push('LojaPage');
  }

}
