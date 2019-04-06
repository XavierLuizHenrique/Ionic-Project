import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Noticias } from '../../model/noticias';
import { noticiaService } from '../../services/noticia.service';

@IonicPage()
@Component({
  selector: 'page-lista-noticias',
  templateUrl: 'lista-noticias.html',
})
export class ListaNoticiasPage {

  noticias : Noticias[] = [];

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public NoticiaServ : noticiaService) {
  }

  ionViewDidLoad() {
    this.NoticiaServ.listaDeNoticias().subscribe(response=>{
      console.log(response);
      this.noticias = response;
    },error => {
      console.log('Servidor não disponível');
    });
  }

}
