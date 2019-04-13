import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-novo-livros',
  templateUrl: 'novo-livros.html',
})
export class NovoLivrosPage {
  formGroup : FormGroup;

  firestore = firebase.firestore(); //Inicio um instancia do banco 
  settings = {timestampsInSnapshots : true} //linha sempre utilizada(padrão)

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public formBuilder : FormBuilder) {

                this.firestore.settings(this.settings);

                this.formGroup = this.formBuilder.group({
                  titulo : [''],
                  preco : [''],
                  categoria : [''],           
                  descricao : [''],
                })
  }

  cadastrar(){
    let ref =this.firestore.collection('livros')
    ref.add(this.formGroup.value)
      .then(resp =>{
      console.log('Cadastrado com sucesso');
      this.navCtrl.setRoot('ListaLivrosPage');
    }).catch(()=>{
      console.log('Erro ao cadastrar');
    })
    }
  
  }