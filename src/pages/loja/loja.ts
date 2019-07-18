import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LojaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loja',
  templateUrl: 'loja.html',
})
export class LojaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad LojaPage');
  }
  IrParaSuplemento(){
    this.navCtrl.push('SuplementoListaPage');
  }
  IrParaAparelho(){
    this.navCtrl.push('AparelhoListaPage');
  }
  IrParaAcessorio(){
    this.navCtrl.push('AcessorioListaPage');
  }
  irParaConfiguracoes(){
    this.navCtrl.push('ConfiguracoesPage');
  }

}
