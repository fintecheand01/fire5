import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// components
import { CargoComponent } from './components/cargo.component';
// directives

// modules
import { CargoRoutesModule } from './cargo.route';
// services
import { CargoService } from './cargo.service';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    CargoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CargoRoutesModule,
    NgxPaginationModule
  ],
  providers: [
    CargoService
  ]
})
export class CargoModule { }
