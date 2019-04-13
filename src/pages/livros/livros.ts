import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import firebase from 'firebase';
import { Livros } from '../../model/livros';


@IonicPage()
@Component({
  selector: 'page-livros',
  templateUrl: 'livros.html',
})
export class LivrosPage {

  formGroup : FormGroup;
  firestore = firebase.firestore(); //Inicio um instancia do banco 
  settings = {timestampsInSnapshots : true} //linha sempre utilizada(padrão)
  livros = new Livros();

  imagem : string = "";

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public formBuilder : FormBuilder) {

                this.firestore.settings(this.settings);

                this.formGroup = this.formBuilder.group({
                  titulo : [''],
                  autor : [''],
                  preco : [''],
                  resumo : [''],           
                  
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
    enviarArquivo(event){
      let imagem = event.srcElement.files[0];
      let ref = firebase.storage().ref().child(`livros/${this.livros.id}.jpg`);  
      ref.put(imagem).then(url=>{
        console.log("Enviado com Sucesso!");
        this.downloadFoto();
      })
    }
  
    downloadFoto(){
      let ref = firebase.storage().ref().child(`livros/${this.livros.id}.jpg`);
      ref.getDownloadURL().then(url=>{
        this.imagem = url;
      })
    }
  }