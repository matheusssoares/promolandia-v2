import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyCompanyPageRoutingModule } from './my-company-routing.module';

import { MyCompanyPage } from './my-company.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ComponentsModule } from 'src/app/components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyCompanyPageRoutingModule,
    SharedModule,
    ComponentsModule
  ],
  declarations: [MyCompanyPage]
})
export class MyCompanyPageModule {}
