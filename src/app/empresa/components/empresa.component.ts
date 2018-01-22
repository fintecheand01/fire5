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
import { EmpresaService } from '../empresa.service';
import { Upload } from '../models/empresa';
import * as _ from 'lodash';

declare var jQuery: any;
declare const $;

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {
  imagen: any;
  public addEmpresaForm: FormGroup;
  public nombre = new FormControl('', [Validators.required]);
  public impuesto = new FormControl('', [Validators.required]);
  public porcentaje = new FormControl('', [Validators.required]);
  public simbolo = new FormControl('', [Validators.required]);
  public logo = new FormControl('');
  selectedFiles: FileList;
  currentUpload: Upload;

  uploads: Observable<Upload[]>;
  showSpinner = true;
  constructor(
    public formBuilder: FormBuilder,
    public af: AngularFirestore,
    public http: Http,
    private upSvc: EmpresaService
  ) { }

  ngOnInit() {
    this.addEmpresaForm = this.formBuilder.group({
        nombre: this.nombre,
        impuesto: this.impuesto,
        porcentaje: this.porcentaje,
        simbolo: this.simbolo,
        logo: this.logo
      });
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  addEmpresa() {
  const file = this.selectedFiles.item(0);
  this.currentUpload = new Upload(file);
  this.upSvc.pushUpload(this.currentUpload, this.addEmpresaForm.value);
  this.addEmpresaForm.reset();
  this.imagen = '';
  }


  deleteUpload(upload) {
    this.upSvc.deleteUpload(upload);
  }

}
