import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AparelhoCadastroPage } from './aparelho-cadastro';

@NgModule({
  declarations: [
    AparelhoCadastroPage,
  ],
  imports: [
    IonicPageModule.forChild(AparelhoCadastroPage),
  ],
})
export class AparelhoCadastroPageModule {}
