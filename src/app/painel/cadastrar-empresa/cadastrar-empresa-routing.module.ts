import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarEmpresaPage } from './cadastrar-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarEmpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarEmpresaPageRoutingModule {}
