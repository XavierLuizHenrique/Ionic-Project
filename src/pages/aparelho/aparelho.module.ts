import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AparelhoPage } from './aparelho';

@NgModule({
  declarations: [
    AparelhoPage,
  ],
  imports: [
    IonicPageModule.forChild(AparelhoPage),
  ],
})
export class AparelhoPageModule {}
