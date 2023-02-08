import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarEmpresaPageRoutingModule } from './cadastrar-empresa-routing.module';

import { CadastrarEmpresaPage } from './cadastrar-empresa.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarEmpresaPageRoutingModule,
    SharedModule
  ],
  declarations: [CadastrarEmpresaPage]
})
export class CadastrarEmpresaPageModule {}
