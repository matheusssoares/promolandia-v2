import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptionNavigationPageRoutingModule } from './option-navigation-routing.module';

import { OptionNavigationPage } from './option-navigation.page';
import { SharedModule } from '../modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptionNavigationPageRoutingModule,
    SharedModule
  ],
  declarations: [OptionNavigationPage]
})
export class OptionNavigationPageModule {}
