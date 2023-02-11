import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarEmpresaPageRoutingModule } from './cadastrar-empresa-routing.module';

import { CadastrarEmpresaPage } from './cadastrar-empresa.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarEmpresaPageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    BrMaskerModule
  ],
  declarations: [CadastrarEmpresaPage]
})
export class CadastrarEmpresaPageModule {}
