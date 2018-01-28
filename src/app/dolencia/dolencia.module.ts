import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// components
import { DolenciaComponent } from './components/dolencia.component';
// directives

// modules
import { DolenciaRoutesModule } from './dolencia.route';
// services
import { DolenciaService } from './dolencia.service';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    DolenciaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DolenciaRoutesModule,
    NgxPaginationModule
  ],
  providers: [
    DolenciaService
  ]
})
export class DolenciaModule { }
