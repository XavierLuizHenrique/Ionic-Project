import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import firebase from 'firebase';
import { Aparelho } from '../../model/aparelho';

@IonicPage()
@Component({
  selector: 'page-aparelho-visualiza',
  templateUrl: 'aparelho-visualiza.html',
})
export class AparelhoVisualizaPage {

  formGroup : FormGroup;
  firestore = firebase.firestore();
  settings = {timestampsInSnapshots : true};
  aparelho = new Aparelho();

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public formBuilder : FormBuilder) {

                this.firestore.settings(this.settings);

                this.aparelho = this.navParams.get('aparelho');

                this.formGroup = this.formBuilder.group({
                  nomeAparelho : [this.aparelho.nomeAparelho],
                  descricao : [this.aparelho.descricao],
                  preco : [this.aparelho.preco],
              })
            }

  atualizar(){
    let ref =this.firestore.collection('aparelho')
    ref.doc(this.aparelho.id).set(this.formGroup.value)
      .then(() =>{
      console.log('Atualizada com sucesso');
      this.navCtrl.push('AparelhoListaPage');
    }).catch(()=>{
      console.log('Erro ao atualizar');
    })
  }
  
  } 