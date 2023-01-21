import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderTopComponent } from 'src/app/components/header-top/header-top.component';
import { IonicModule } from '@ionic/angular';
import { SlideBannerComponent } from 'src/app/components/slide-banner/slide-banner.component';
import { SlideAnunciosComponent } from 'src/app/components/slide-anuncios/slide-anuncios.component';
import { SlideParceirosComponent } from 'src/app/components/slide-parceiros/slide-parceiros.component';



@NgModule({
  declarations: [
    HeaderTopComponent,
    SlideBannerComponent,
    SlideAnunciosComponent,
    SlideParceirosComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderTopComponent,
    SlideBannerComponent,
    SlideAnunciosComponent,
    SlideParceirosComponent
  ]
})
export class SharedModule { }
