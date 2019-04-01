import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaClentesServPage } from './lista-clentes-serv';

@NgModule({
  declarations: [
    ListaClentesServPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaClentesServPage),
  ],
})
export class ListaClentesServPageModule {}
