import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrasePageRoutingModule } from './cadastrase-routing.module';

import { CadastrasePage } from './cadastrase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrasePageRoutingModule
  ],
  declarations: [CadastrasePage]
})
export class CadastrasePageModule {}
