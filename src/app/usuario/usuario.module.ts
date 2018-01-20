import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// components
import { UsuarioComponent } from './components/usuario.component';
// directives

// modules
import { UsuarioRoutesModule } from './usuario.route';
// services
import { UsuarioService } from './usuario.service';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsuarioRoutesModule,
    NgxPaginationModule

  ],
  providers: [
    UsuarioService
  ]
})
export class UsuarioModule { }
