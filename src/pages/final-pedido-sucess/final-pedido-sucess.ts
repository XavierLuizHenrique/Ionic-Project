import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-final-pedido-sucess',
  templateUrl: 'final-pedido-sucess.html',
})
export class FinalPedidoSucessPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinalPedidoSucessPage');
  }
  IrParaInicio(){
    this.navCtrl.setRoot('InicioPage');
  }

}
