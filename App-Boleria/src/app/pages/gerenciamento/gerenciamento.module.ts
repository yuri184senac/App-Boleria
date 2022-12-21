import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GerenciamentoPageRoutingModule } from './gerenciamento-routing.module';

import { GerenciamentoPage } from './gerenciamento.page';
import { CadastrarPageModule } from './crud/cadastrar/cadastrar.module';
import { EditarPageModule } from './crud/editar/editar.module';
import { VisualizarPageModule } from './crud/visualizar/visualizar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GerenciamentoPageRoutingModule,
    CadastrarPageModule,
    EditarPageModule,
    VisualizarPageModule,
  ],
  declarations: [GerenciamentoPage]
})
export class GerenciamentoPageModule {}
