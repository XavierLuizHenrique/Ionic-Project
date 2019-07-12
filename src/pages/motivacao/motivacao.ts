import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-motivacao',
  templateUrl: 'motivacao.html',
})
export class MotivacaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MotivacaoPage');
  }
  irParaConfiguracoes(){
    this.navCtrl.push('ConfiguracoesPage');
  }

}
