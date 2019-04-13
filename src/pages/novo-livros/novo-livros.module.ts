import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NovoLivrosPage } from './novo-livros';

@NgModule({
  declarations: [
    NovoLivrosPage,
  ],
  imports: [
    IonicPageModule.forChild(NovoLivrosPage),
  ],
})
export class NovoLivroPageModule {}
