import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-informacoes-pessoais',
  templateUrl: 'informacoes-pessoais.html',
})
export class InformacoesPessoaisPage {

    formGroup : FormGroup;
    firestore = firebase.firestore(); //Inicio um instancia do banco 
    settings = {timestampsInSnapshots : true} //linha sempre utilizada(padrão)
  
    constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                public formBuilder : FormBuilder) {
  
                  this.firestore.settings(this.settings);
  
                  this.formGroup = this.formBuilder.group({
                    nomePessoal : [''],
                    idade : [''],
                    altura : [''],           
                    peso : [''],
                    telefone : [''],           
                    email : [''],
                  })
    }
  
    cadastrar(){
      let ref =this.firestore.collection('informacoespessoais')
      ref.add(this.formGroup.value)
        .then(resp =>{
        console.log('Cadastrado com sucesso');
        this.navCtrl.setRoot('InicioPage');
      }).catch(()=>{
        console.log('Erro ao cadastrar');
      })
  
    }
  }