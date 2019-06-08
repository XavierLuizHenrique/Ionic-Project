import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BicepsPage } from './biceps';

@NgModule({
  declarations: [
    BicepsPage,
  ],
  imports: [
    IonicPageModule.forChild(BicepsPage),
  ],
})
export class BicepsPageModule {}
