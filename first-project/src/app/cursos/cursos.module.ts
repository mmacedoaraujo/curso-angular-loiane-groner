import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursoDeDetalheComponent } from './curso-de-detalhe/curso-de-detalhe.component';
import { CursosService } from './cursos.service';



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
  ],
  providers: [ CursosService ]
})
export class CursosModule { }
