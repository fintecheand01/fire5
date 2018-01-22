import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// components
import { EmpresaComponent } from './components/empresa.component';
// directives

// modules
import { EmpresaRoutesModule } from './empresa.route';
// services
import { EmpresaService } from './empresa.service';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    EmpresaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EmpresaRoutesModule,
    NgxPaginationModule

  ],
  providers: [
    EmpresaService
  ]
})
export class EmpresaModule { }
