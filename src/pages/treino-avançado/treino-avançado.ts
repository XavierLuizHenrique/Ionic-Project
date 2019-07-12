import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TreinoAvançadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-treino-avançado',
  templateUrl: 'treino-avançado.html',
})
export class TreinoAvançadoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TreinoAvançadoPage');
  }
  irParaConfiguracoes(){
    this.navCtrl.push('ConfiguracoesPage');
  }

}
