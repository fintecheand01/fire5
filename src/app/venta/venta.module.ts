import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// components
import { VentaComponent } from './components/venta.component';
// directives

// modules
import { VentaRoutesModule } from './venta.route';
// services
import { VentaService } from './venta.service';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    VentaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VentaRoutesModule,
    NgxPaginationModule

  ],
  providers: [
    VentaService
  ]
})
export class VentaModule { }
