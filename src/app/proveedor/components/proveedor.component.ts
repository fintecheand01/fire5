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
import { ProveedorService } from '../proveedor.service';
import { Proveedor } from '../models/proveedor';
import * as _ from 'lodash';

declare var jQuery: any;
declare const $;

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {
  @ViewChild('myModal') myModal: ElementRef;
  @ViewChild('myModalEdit') myModalEdit: ElementRef;
  addProveedorForm: FormGroup;
  descripcion = new FormControl('', [Validators.required]);
  constructor(
    public formBuilder: FormBuilder,
    public af: AngularFirestore,
    public http: Http,
    private proveedorService: ProveedorService
  ) { }

  ngOnInit() {
    this.addProveedorForm = this.formBuilder.group({
      descripcion: this.descripcion
    });
  }

  showModal() {
    jQuery(this.myModal.nativeElement).modal('show');
  }

}
