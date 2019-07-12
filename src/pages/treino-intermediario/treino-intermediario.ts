import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TreinoIntermediarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-treino-intermediario',
  templateUrl: 'treino-intermediario.html',
})
export class TreinoIntermediarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TreinoIntermediarioPage');
  }
  irParaConfiguracoes(){
    this.navCtrl.push('ConfiguracoesPage');
  }

}
