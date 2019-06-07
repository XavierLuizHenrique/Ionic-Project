import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-alimentacao',
  templateUrl: 'alimentacao.html',
})
export class AlimentacaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlimentacaoPage');
  }

  irParaEmagrecer(){
    this.navCtrl.push('EmagrecerPage');
  }
  irParaGanharMassa(){
    this.navCtrl.push('GanharMassaPage');
  }

}
