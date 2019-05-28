import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuplementosPage } from './suplementos';

@NgModule({
  declarations: [
    SuplementosPage,
  ],
  imports: [
    IonicPageModule.forChild(SuplementosPage),
  ],
})
export class SuplementosPageModule {}
