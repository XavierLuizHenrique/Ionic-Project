import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import firebase from 'firebase';
import { Suplemento } from '../../model/suplementos';


@IonicPage()
@Component({
  selector: 'page-suplementos-visualiza',
  templateUrl: 'suplementos-visualiza.html',
})
export class suplementosVisualizaPage {

  formGroup : FormGroup;
  firestore = firebase.firestore();
  settings = {timestampsInSnapshots : true};
  suplementos = new Suplemento();

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public formBuilder : FormBuilder) {

                this.firestore.settings(this.settings);

                this.suplementos = this.navParams.get('suplementos');

                this.formGroup = this.formBuilder.group({
                  nomesuplementos : [this.suplementos.nomesuplementos],
                  preco : [this.suplementos.preco],
                  descricao : [this.suplementos.descricao],
              })
            }

  atualizar(){
    let ref =this.firestore.collection('suplementos')
    ref.doc(this.suplementos.id).set(this.formGroup.value)
      .then(() =>{
      console.log('Atualizada com sucesso');
      this.navCtrl.push('ListaSuplementosPage');
    }).catch(()=>{
      console.log('Erro ao atualizar');
    })
  }
  
  irParaConfiguracoes(){
    this.navCtrl.push('ConfiguracoesPage');
  }

} 
