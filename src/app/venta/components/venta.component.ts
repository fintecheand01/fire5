import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { VentaService } from '../venta.service';
import { SucursalService } from '../../sucursal/sucursal.service';
import 'rxjs/add/operator/map';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
declare var jQuery: any;
declare const $;

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {
  @ViewChild('myModal') myModal: ElementRef;
  @ViewChild('myModalEdit') myModalEdit: ElementRef;
  public addVentaForm: FormGroup;
  public nombres = new FormControl('', [Validators.required]);
  public apellidos = new FormControl('', [Validators.required]);
  public fnac = new FormControl('', [Validators.required]);
  public sexo = new FormControl('', [Validators.required]);
  public direccion = new FormControl('', [Validators.required]);
  public celular = new FormControl('', [Validators.required]);
  public dni = new FormControl('', [Validators.required]);
  public cargo = new FormControl('', [Validators.required]);
  public telefono = new FormControl('', [Validators.required]);
  public correo = new FormControl('', [Validators.required]);
  constructor(
    public formBuilder: FormBuilder,
    public ventaService: VentaService,
    public sucursalService: SucursalService
  ) {  }

  ngOnInit() {
    this.addVentaForm = this.formBuilder.group({
      nombres: this.nombres,
      apellidos: this.apellidos,
      fnac: this.fnac,
      sexo: this.sexo,
      direccion: this.direccion,
      celular: this.celular,
      dni: this.dni,
      cargo: this.cargo,
      telefono: this.telefono,
      correo: this.correo
    });
  }

  showModal() {
    jQuery(this.myModal.nativeElement).modal('show');
  }


}
