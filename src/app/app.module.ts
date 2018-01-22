import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { FirebaseModule } from './firebase';

import { AuthModule } from './auth';

import { InicioModule } from './inicio';
import { SucursalModule } from './sucursal';
import { EmpleadoModule } from './empleado';
import { UsuarioModule } from './usuario';
import { MedicamentoModule } from './medicamento';
import { CompraModule } from './compra';
import { ProveedorModule } from './proveedor';
import { VentaModule } from './venta';
import { EmpresaModule } from './empresa';
import { CargoModule } from './cargo';
import { DocumentoModule } from './documento';
import { AngularFireDatabaseModule  } from 'angularfire2/database';
import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([], {useHash: false}),
    FirebaseModule,
    NgxPaginationModule,
    InicioModule,
    SucursalModule,
    EmpleadoModule,
    UsuarioModule,
    MedicamentoModule,
    CompraModule,
    ProveedorModule,
    VentaModule,
    EmpresaModule,
    CargoModule,
    DocumentoModule,
    AngularFireDatabaseModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
