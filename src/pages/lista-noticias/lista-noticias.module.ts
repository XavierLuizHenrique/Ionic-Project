import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaNoticiasPage } from './lista-noticias';

@NgModule({
  declarations: [
    ListaNoticiasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaNoticiasPage),
  ],
})
export class ListaNoticiasPageModule {}
