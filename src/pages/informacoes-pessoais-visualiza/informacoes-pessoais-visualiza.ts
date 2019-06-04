import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InformacoesPessoaisVisualizaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-informacoes-pessoais-visualiza',
  templateUrl: 'informacoes-pessoais-visualiza.html',
})
export class InformacoesPessoaisVisualizaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformacoesPessoaisVisualizaPage');
  }

}
