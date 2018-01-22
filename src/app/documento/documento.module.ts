import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// components
import { DocumentoComponent } from './components/documento.component';
// directives

// modules
import { DocumentoRoutesModule } from './documento.route';
// services
import { DocumentoService } from './documento.service';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    DocumentoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DocumentoRoutesModule,
    NgxPaginationModule
  ],
  providers: [
    DocumentoService
  ]
})
export class DocumentoModule { }
