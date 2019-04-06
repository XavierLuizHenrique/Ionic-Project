import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Endereco } from '../../model/endereco';
import { EnderecoService } from '../../services/endereco.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-busca-endereco',
  templateUrl: 'busca-endereco.html',
})
export class BuscaEnderecoPage {

  formGroup : FormGroup;
  @ViewChild('cep') cep;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public enderecoServ : EnderecoService,
    public formBuilder : FormBuilder) {
      this.formGroup = this.formBuilder.group({
        cep : [''],
        logradouro : [''],
        bairro : [''],
        localidade : [''],
        uf : [''],
      })
  }

  buscar(){
    //let cep = this.formGroup.controls['cep'].value
    this.enderecoServ.buscaCEP(this.cep.value).subscribe(response =>{

      this.formGroup = this.formBuilder.group({
        logradouro : [response['logradouro']],
        bairro : [response['bairro']],
        localidade : [response['localidade']],
        uf : [response['uf']]
      })
    })
  }

}
