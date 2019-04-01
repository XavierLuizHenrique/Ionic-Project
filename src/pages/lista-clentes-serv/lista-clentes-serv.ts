import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientService } from '../../services/cliente.service';
import { cliente } from '../../model/cliente';


@IonicPage()
@Component({
  selector: 'page-lista-clentes-serv',
  templateUrl: 'lista-clentes-serv.html',
})
export class ListaClentesServPage {

  clientes : cliente[] = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public ClienteServ : ClientService) {
  }

  ionViewDidLoad() {
    this.ClienteServ.listaDeClientes().subscribe(response=>{
      this.clientes = response;
    },error => {
      console.log('Servidor não disponível');
    });
  }

}
