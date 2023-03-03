import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdicionarCategoriaComponent } from './adicionar-categoria/adicionar-categoria.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { EditarCategoriaComponent } from './editar-categoria/editar-categoria.component';

@NgModule({
    declarations: [
      AdicionarCategoriaComponent,
      ListCategoryComponent,
      EditarCategoriaComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [
        AdicionarCategoriaComponent,
        ListCategoryComponent,
        EditarCategoriaComponent
    ]
})

export class ComponentsModule { }
