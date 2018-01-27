import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// components
import { MedidaComponent } from './components/medida.component';
// directives

// modules
import { MedidaRoutesModule } from './medida.route';
// services
import { MedidaService } from './medida.service';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    MedidaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MedidaRoutesModule,
    NgxPaginationModule
  ],
  providers: [
    MedidaService
  ]
})
export class MedidaModule { }
