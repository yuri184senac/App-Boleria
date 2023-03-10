import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizarPageRoutingModule } from './visualizar-routing.module';

import { VisualizarPage } from './visualizar.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    IonicModule,
    VisualizarPageRoutingModule
  ],
  declarations: [VisualizarPage],
  exports:[VisualizarPage]
})
export class VisualizarPageModule {}
