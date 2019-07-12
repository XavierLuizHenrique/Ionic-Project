import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import firebase from 'firebase';
import { Acessorio } from '../../model/acessorio';

@IonicPage()
@Component({
  selector: 'page-acessorio-visualiza',
  templateUrl: 'acessorio-visualiza.html',
})
export class AcessorioVisualizaPage {

  formGroup : FormGroup;
  firestore = firebase.firestore();
  settings = {timestampsInSnapshots : true};
  acessorio = new Acessorio();

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public formBuilder : FormBuilder) {

                this.firestore.settings(this.settings);

                this.acessorio = this.navParams.get('acessorio');

                this.formGroup = this.formBuilder.group({
                  nomeAcessorio : [this.acessorio.nomeAcessorio],
                  descricao : [this.acessorio.descricao],
                  preco : [this.acessorio.preco],
              })
            }

  atualizar(){
    let ref =this.firestore.collection('acessorio')
    ref.doc(this.acessorio.id).set(this.formGroup.value)
      .then(() =>{
      console.log('Atualizada com sucesso');
      this.navCtrl.push('AcessorioListaPage');
    }).catch(()=>{
      console.log('Erro ao atualizar');
    })
  }
  
  } 




