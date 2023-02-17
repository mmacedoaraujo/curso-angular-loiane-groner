import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursoDeDetalheComponent } from './curso-de-detalhe/curso-de-detalhe.component';



@NgModule({
  declarations: [
    CursosComponent,
    CursoDeDetalheComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CursosComponent,
    CursoDeDetalheComponent
  ]
})
export class CursosModule { }
