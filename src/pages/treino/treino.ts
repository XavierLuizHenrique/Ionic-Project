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
    this.navCtrl.push('BicepsPage');
  }
  irParaCostas(){
    this.navCtrl.push('CostasPage');
  }
  irParaPernas(){
    this.navCtrl.push('PernasPage');
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
  irParaConfiguracoes(){
    this.navCtrl.push('ConfiguracoesPage');
  }

}
