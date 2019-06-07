import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InformacoesPessoaisListaPage } from './informacoes-pessoais-lista';

@NgModule({
  declarations: [
    InformacoesPessoaisListaPage,
  ],
  imports: [
    IonicPageModule.forChild(InformacoesPessoaisListaPage),
  ],
})
export class InformacoesPessoaisListaPageModule {}
