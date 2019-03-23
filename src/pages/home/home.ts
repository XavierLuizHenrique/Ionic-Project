import { Component } from '@angular/core';
import { NavController, IonicPage, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
@IonicPage()
export class HomePage {

  nomes : any[] = [
    {'nome' : 'Caio'},
    {'nome' : 'Adryanno'},
    {'nome' : 'Alessandra'},
    {'nome' : 'Geycy'},
    {'nome' : 'Regina'} 
  ]

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController) {

  }

  olaMundo(){
    console.log('Olá Mundo Mobile!');
    this.showAlert();
  }

  irParaTeste(){
    this.navCtrl.push('TesteIonicPage')
    // this.navCtrl.setRoot('TesteIonicPage') -  Sem seta para retorno
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Coé Rapaziada!',
      subTitle: 'Vamos aprender Mobile?',
      buttons: ['OK']
    });
    alert.present();
  }
}
