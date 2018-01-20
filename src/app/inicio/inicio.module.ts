import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// components

import { InicioComponent } from './components/inicio.component';

// modules
import { InicioRoutesModule } from './inicio.route';

import { InicioService } from './inicio.service';


@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InicioRoutesModule

  ],
  providers: [
    InicioService
  ]
})
export class InicioModule { }
