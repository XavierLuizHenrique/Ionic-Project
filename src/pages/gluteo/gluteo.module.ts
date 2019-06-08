import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GluteoPage } from './gluteo';

@NgModule({
  declarations: [
    GluteoPage,
  ],
  imports: [
    IonicPageModule.forChild(GluteoPage),
  ],
})
export class GluteoPageModule {}
