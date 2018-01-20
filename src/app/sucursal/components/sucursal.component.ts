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
  descripcion = new FormControl('', [Validators.required]);
  constructor(
    public formBuilder: FormBuilder,
    public af: AngularFirestore,
    public http: Http,
    private sucursalService: SucursalService
  ) { }

  ngOnInit() {
    this.addSucursalForm = this.formBuilder.group({
      descripcion: this.descripcion
    });
  }

  showModal() {
    jQuery(this.myModal.nativeElement).modal('show');
  }

}
