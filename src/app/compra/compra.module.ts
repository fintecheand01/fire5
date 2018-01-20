import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// components
import { CompraComponent } from './components/compra.component';
// directives

// modules
import { CompraRoutesModule } from './compra.route';
// services
import { CompraService } from './compra.service';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    CompraComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CompraRoutesModule,
    NgxPaginationModule

  ],
  providers: [
    CompraService
  ]
})
export class CompraModule { }
