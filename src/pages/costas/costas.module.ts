import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CostasPage } from './costas';

@NgModule({
  declarations: [
    CostasPage,
  ],
  imports: [
    IonicPageModule.forChild(CostasPage),
  ],
})
export class CostasPageModule {}
