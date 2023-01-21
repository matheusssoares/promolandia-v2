import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptionNavigationPage } from './option-navigation.page';

const routes: Routes = [
  {
    path: '',
    component: OptionNavigationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptionNavigationPageRoutingModule {}
