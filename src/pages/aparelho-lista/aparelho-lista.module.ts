import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AparelhoListaPage } from './aparelho-lista';

@NgModule({
  declarations: [
    AparelhoListaPage,
  ],
  imports: [
    IonicPageModule.forChild(AparelhoListaPage),
  ],
})
export class AparelhoListaPageModule {}
