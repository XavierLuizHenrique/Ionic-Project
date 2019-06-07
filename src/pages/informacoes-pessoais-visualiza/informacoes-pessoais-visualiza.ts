import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import firebase from 'firebase';
import { InformacoesPessoais } from '../../model/informacoespessoais';

@IonicPage()
@Component({
  selector: 'page-informacoes-pessoais-visualiza',
  templateUrl: 'informacoes-pessoais-visualiza.html',
})
export class InformacoesPessoaisVisualizaPage {

  formGroup : FormGroup;
  firestore = firebase.firestore();
  settings = {timestampsInSnapshots : true};
  informacoespessoais = new InformacoesPessoais();

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public formBuilder : FormBuilder) {

                this.firestore.settings(this.settings);

                this.informacoespessoais = this.navParams.get('informacoespessoais');

                this.formGroup = this.formBuilder.group({
                  nomePessoal : [this.informacoespessoais.nomePessoal],
                  idade : [this.informacoespessoais.idade],
                  altura : [this.informacoespessoais.altura],
                  peso : [this.informacoespessoais.peso],
                  telefone : [this.informacoespessoais.telefone],
                  email : [this.informacoespessoais.email],
              })
            }

  atualizar(){
    let ref =this.firestore.collection('informacoespessoais')
    ref.doc(this.informacoespessoais.id).set(this.formGroup.value)
      .then(() =>{
      console.log('Atualizada com sucesso');
      this.navCtrl.push('ListaInformacoesPessoaisPage');
    }).catch(()=>{
      console.log('Erro ao atualizar');
    })
  }
  
  } 