import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuplementoListaPage } from './suplemento-lista';

@NgModule({
  declarations: [
    SuplementoListaPage,
  ],
  imports: [
    IonicPageModule.forChild(SuplementoListaPage),
  ],
})
export class SuplementoListaPageModule {}
