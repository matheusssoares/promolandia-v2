import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmarEmpresaPage } from './confirmar-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmarEmpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmarEmpresaPageRoutingModule {}
