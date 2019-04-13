import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import firebase from 'firebase';
import { Livros } from '../../model/livros';


@IonicPage()
@Component({
  selector: 'page-livros-visualiza',
  templateUrl: 'livros-visualiza.html',
})
export class LivrosVisualizaPage {

  formGroup : FormGroup;
  firestore = firebase.firestore();
  settings = {timestampsInSnapshots : true};
  livros = new Livros();


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public formBuilder : FormBuilder) {

                this.firestore.settings(this.settings);

                this.livros = this.navParams.get('livros');

                this.formGroup = this.formBuilder.group({
                  titulo : [this.livros.titulo],
                  autor : [this.livros.autor],
                  preco : [this.livros.preco],
                  resumo : [this.livros.resumo],
              })
            }

  atualiza(){
    let ref =this.firestore.collection('livros')
    ref.doc(this.livros.id).set(this.formGroup.value)
      .then(() =>{
      console.log('Atualizada com sucesso');
      this.navCtrl.push('ListaLivrosPage');
    }).catch(()=>{
      console.log('Erro ao atualizar');
    })
  }
} 
