import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-treino',
  templateUrl: 'treino.html',
})
export class TreinoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TreinoPage');
  }

  irParaBiceps(){
    this.navCtrl.push('bicepsPage');
  }
  irParaCostas(){
    this.navCtrl.push('CostasPage');
  }
  irParaPerna(){
    this.navCtrl.push('PernaPage');
  }
  irParaAbdomen(){
    this.navCtrl.push('AbdomenPage');
  }
  irParaOmbro(){
    this.navCtrl.push('OmbroPage');
  }
  irParaPeito(){
    this.navCtrl.push('PeitoPage');
  }
  irParaGluteo(){
    this.navCtrl.push('GluteoPage');
  }
  


}
