import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NovoSuplementoPage } from './novo-suplemento';

@NgModule({
  declarations: [
    NovoSuplementoPage,
  ],
  imports: [
    IonicPageModule.forChild(NovoSuplementoPage),
  ],
})
export class NovoSuplementoPageModule {}
