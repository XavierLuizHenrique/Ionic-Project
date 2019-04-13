import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LivrosVisualizaPage } from './livros-visualiza';

@NgModule({
  declarations: [
    LivrosVisualizaPage,
  ],
  imports: [
    IonicPageModule.forChild(LivrosVisualizaPage),
  ],
})
export class LivroVisualizaPageModule {}
