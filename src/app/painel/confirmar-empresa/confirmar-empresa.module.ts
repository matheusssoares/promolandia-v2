import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmarEmpresaPageRoutingModule } from './confirmar-empresa-routing.module';

import { ConfirmarEmpresaPage } from './confirmar-empresa.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmarEmpresaPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [ConfirmarEmpresaPage]
})
export class ConfirmarEmpresaPageModule {}
