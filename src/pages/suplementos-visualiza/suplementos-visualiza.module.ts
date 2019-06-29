import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { suplementosVisualizaPage } from './suplementos-visualiza';

@NgModule({
  declarations: [
    suplementosVisualizaPage,
  ],
  imports: [
    IonicPageModule.forChild(suplementosVisualizaPage),
  ],
})
export class SuplementosVisualizaPageModule {}
