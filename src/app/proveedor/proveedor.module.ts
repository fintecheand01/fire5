import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// components

import { ProveedorComponent } from './components/proveedor.component';

// modules
import { ProveedorRoutesModule } from './proveedor.route';

import { ProveedorService } from './proveedor.service';

import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    ProveedorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProveedorRoutesModule,
    NgxPaginationModule

  ],
  providers: [
    ProveedorService
  ]
})
export class ProveedorModule { }
