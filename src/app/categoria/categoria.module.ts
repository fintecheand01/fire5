import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// components
import { CategoriaComponent } from './components/categoria.component';
// directives

// modules
import { CategoriaRoutesModule } from './categoria.route';
// services
import { CategoriaService } from './categoria.service';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    CategoriaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CategoriaRoutesModule,
    NgxPaginationModule
  ],
  providers: [
    CategoriaService
  ]
})
export class CategoriaModule { }
