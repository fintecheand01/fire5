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
import { InicioService } from '../inicio.service';
import { Upload } from '../models/inicio';
import * as _ from 'lodash';

declare var jQuery: any;
declare const $;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  selectedFiles: FileList;
  currentUpload: Upload;

  uploads: Observable<Upload[]>;
  showSpinner = true;
  constructor(
    public formBuilder: FormBuilder,
    public af: AngularFirestore,
    public http: Http,
    private upSvc: InicioService
  ) { }

  ngOnInit() {
    // this.uploads = this.upSvc.getUploads();
    // this.uploads.subscribe(() => this.showSpinner = false);
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  uploadSingle() {

  const file = this.selectedFiles.item(0);
  this.currentUpload = new Upload(file);
  this.upSvc.pushUpload(this.currentUpload);
  }

  uploadMulti() {
  const files = this.selectedFiles;
  const filesIndex = _.range(files.length);
  _.each(filesIndex, (idx) => {
    this.currentUpload = new Upload(files[idx]);
    this.upSvc.pushUpload(this.currentUpload);
    });
  }

  deleteUpload(upload) {
    this.upSvc.deleteUpload(upload);
  }

}
