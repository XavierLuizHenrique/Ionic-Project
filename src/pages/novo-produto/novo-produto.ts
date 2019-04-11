import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-novo-produto',
  templateUrl: 'novo-produto.html',
})
export class NovoProdutoPage {

  formGroup : FormGroup;

  firestore = firebase.firestore(); //Inicio um instancia do banco 
  settings = {timestampsInSnapshots : true} //linha sempre utilizada(padrão)

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public formBuilder : FormBuilder) {

                this.firestore.settings(this.settings);

                this.formGroup = this.formBuilder.group({
                  nomeProduto : [''],
                  preco : [''],
                  categoria : [''],           
                  descricao : [''],
                })
  }

  cadastrar(){
    let ref =this.firestore.collection('produto')
    ref.add(this.formGroup.value)
      .then(resp =>{
      console.log('Cadastrado com sucesso');
      this.navCtrl.setRoot('ListaProdutoPage');
    }).catch(()=>{
      console.log('Erro ao cadastrar');
    })

  }

}
