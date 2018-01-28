import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// components
import { ClienteComponent } from './components/cliente.component';
// directives

// modules
import { ClienteRoutesModule } from './cliente.route';
// services
import { ClienteService } from './cliente.service';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    ClienteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClienteRoutesModule,
    NgxPaginationModule

  ],
  providers: [
    ClienteService
  ]
})
export class ClienteModule { }
