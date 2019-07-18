import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-endereco-cadastro',
  templateUrl: 'endereco-cadastro.html',
})
export class EnderecoCadastroPage {

  formGroup : FormGroup;
    firestore = firebase.firestore(); //Inicio um instancia do banco 
    settings = {timestampsInSnapshots : true} //linha sempre utilizada(padrão)

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder : FormBuilder) {

      this.firestore.settings(this.settings);

      this.formGroup = this.formBuilder.group({
        rg : [''],
        cpf : [''],           
        email : [''],
        telefone : [''],
        cep : [''],
        cidade : [''],
        rua : [''],           
        pr : [''],
        pagamento : [''],
      })
}

irParaConfiguracoes(){
this.navCtrl.push('ConfiguracoesPage');
}

irParaFinal(){
  this.navCtrl.push('FinalPedidoSucessPage');
}

cadastrar(){
let ref =this.firestore.collection('endereco')
ref.add(this.formGroup.value)
.then(resp =>{
console.log('Cadastrado com sucesso');
this.navCtrl.setRoot('InicioPage');
}).catch(()=>{
console.log('Erro ao cadastrar');
})

}
}
