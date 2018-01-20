import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// components

import { SucursalComponent } from './components/sucursal.component';

// modules
import { SucursalRoutesModule } from './sucursal.route';

import { SucursalService } from './sucursal.service';

import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    SucursalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SucursalRoutesModule,
    NgxPaginationModule

  ],
  providers: [
    SucursalService
  ]
})
export class SucursalModule { }
