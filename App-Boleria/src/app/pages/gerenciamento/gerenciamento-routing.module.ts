import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GerenciamentoPage } from './gerenciamento.page';

const routes: Routes = [
  {
    path: '',
    component: GerenciamentoPage
  },
  {
    path: 'cadastrar',
    loadChildren: () => import('./crud/cadastrar/cadastrar.module').then( m => m.CadastrarPageModule)
  },
  {
    path: 'editar/:id',
    loadChildren: () => import('./crud/editar/editar.module').then( m => m.EditarPageModule)
  },
  {
    path: 'visualizar',
    loadChildren: () => import('./crud/visualizar/visualizar.module').then( m => m.VisualizarPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GerenciamentoPageRoutingModule {}
