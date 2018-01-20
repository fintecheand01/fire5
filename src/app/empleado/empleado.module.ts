import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// components
import { EmpleadoComponent } from './components/empleado.component';
// directives

// modules
import { EmpleadoRoutesModule } from './empleado.route';
// services
import { EmpleadoService } from './empleado.service';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    EmpleadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EmpleadoRoutesModule,
    NgxPaginationModule

  ],
  providers: [
    EmpleadoService
  ]
})
export class EmpleadoModule { }
