import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { ConfirmacaoComponent } from './confirmacao/confirmacao.component';
import { RelatorioComponent } from './relatorio/relatorio.component';

const routes: Routes = [
  {
    path: '', component:PaginaInicialComponent
  },
  {
    path: 'formulario', component:FormComponent
  },
  {
    path: 'confirmacao', component:ConfirmacaoComponent
  },
  {
    path: 'relatorio', component:RelatorioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
