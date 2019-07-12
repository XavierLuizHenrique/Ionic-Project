import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarAcessorioPage } from './cadastrar-acessorio';

@NgModule({
  declarations: [
    CadastrarAcessorioPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarAcessorioPage),
  ],
})
export class CadastrarAcessorioPageModule {}
