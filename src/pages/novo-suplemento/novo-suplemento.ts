import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import firebase from 'firebase';


@IonicPage()
@Component({
  selector: ' Page-Novo-suplemento',
  templateUrl: 'novo-suplemento.html',
})
export class  NovoSuplementoPage {

  formGroup : FormGroup;

  firestore = firebase.firestore(); 
  settings = {timestampsInSnapshots : true} 

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public formBuilder : FormBuilder) {

                this.firestore.settings(this.settings);

                this.formGroup = this.formBuilder.group({
                  nomeSuplementos : [''],
                  preco : [''],
                  categoria : [''],           
                  descricao : [''],
                })
  }

  cadastrar(){
    let ref =this.firestore.collection('suplementos')
    ref.add(this.formGroup.value)
      .then(resp =>{
      console.log('Cadastrado com sucesso');
      this.navCtrl.setRoot('ListaSuplementosPage');
    }).catch(()=>{
      console.log('Erro ao cadastrar');
    })

  }

}