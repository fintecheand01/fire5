import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Response,  Headers, RequestOptions } from '@angular/http';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { SucursalService } from '../sucursal.service';
import { Sucursal } from '../models/sucursal';
import * as _ from 'lodash';

declare var jQuery: any;
declare const $;

@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.css']
})
export class SucursalComponent implements OnInit {
  @ViewChild('myModal') myModal: ElementRef;
  @ViewChild('myModalEdit') myModalEdit: ElementRef;
  addSucursalForm: FormGroup;
  ruc = new FormControl('', [Validators.required]);
  razonSocial = new FormControl('', [Validators.required]);
  direccion = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);
  telefono = new FormControl('', [Validators.required]);
  celular = new FormControl('', [Validators.required]);

  sucursaltoEdit: any;
  constructor(
    public formBuilder: FormBuilder,
    public af: AngularFirestore,
    public http: Http,
    private sucursalService: SucursalService
  ) {
    this.sucursaltoEdit = {};
  }

  ngOnInit() {
    this.addSucursalForm = this.formBuilder.group({
      ruc: this.ruc,
      razonSocial: this.razonSocial,
      direccion: this.direccion,
      email: this.email,
      telefono: this.telefono,
      celular: this.celular,
    });
  }

  showModal() {
    jQuery(this.myModal.nativeElement).modal('show');
  }

  addSucursal() {
    this.sucursalService.createSucursales(this.addSucursalForm.value);
    this.addSucursalForm.reset();
  }

  enableEditing(sucursal) {
    jQuery(this.myModalEdit.nativeElement).modal('show');
    this.sucursaltoEdit = sucursal;
  }
  updateSucursal(sucursaltoEdit) {
    this.sucursalService.updateSucursales(sucursaltoEdit);
    jQuery(this.myModalEdit.nativeElement).modal('hide');
  }
  deleteSucursal(sucursal) {
    this.sucursalService.removeSucursales(sucursal);
  }
}
