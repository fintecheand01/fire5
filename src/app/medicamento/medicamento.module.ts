import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// components
import { MedicamentoComponent } from './components/medicamento.component';
// directives

// modules
import { MedicamentoRoutesModule } from './medicamento.route';
// services
import { MedicamentoService } from './medicamento.service';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    MedicamentoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MedicamentoRoutesModule,
    NgxPaginationModule

  ],
  providers: [
    MedicamentoService
  ]
})
export class MedicamentoModule { }
