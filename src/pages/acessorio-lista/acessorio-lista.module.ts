import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcessorioListaPage } from './acessorio-lista';

@NgModule({
  declarations: [
    AcessorioListaPage,
  ],
  imports: [
    IonicPageModule.forChild(AcessorioListaPage),
  ],
})
export class AcessorioListaPageModule {}
