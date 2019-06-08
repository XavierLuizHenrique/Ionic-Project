import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AbdomenPage } from './abdomen';

@NgModule({
  declarations: [
    AbdomenPage,
  ],
  imports: [
    IonicPageModule.forChild(AbdomenPage),
  ],
})
export class AbdomenPageModule {}
