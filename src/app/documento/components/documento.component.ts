import { Component, OnInit, OnDestroy } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { DocumentoService } from '../../documento/documento.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../auth';

declare var jQuery: any;
import * as ARR from 'lodash';

@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.css']
})
export class DocumentoComponent implements OnInit {
  @ViewChild('myModal') myModal: ElementRef;
  @ViewChild('myModalEdit') myModalEdit: ElementRef;
   addDocumentoForm: FormGroup;
   descripcion = new FormControl('', [Validators.required]);

   documentotoEdit: any;

  constructor(
    public formBuilder: FormBuilder,
    public afs: AngularFirestore,
    public auth: AuthService,
    public documentoService: DocumentoService,
  ) {
    this.documentotoEdit = {};
  }

  ngOnInit() {
    this.addDocumentoForm = this.formBuilder.group({
      descripcion: this.descripcion
    });
  }

  showModal() {
    jQuery(this.myModal.nativeElement).modal('show');
  }

  addDocumento() {
    this.documentoService.createDocumentos(this.addDocumentoForm.value);
    this.addDocumentoForm.reset();

  }

  deleteDocumento(documento) {
    this.documentoService.removeDocumentos(documento);
  }

  enableEditing(documento) {
    jQuery(this.myModalEdit.nativeElement).modal('show');
    this.documentotoEdit = documento;
  }

  updateDocumento(documentotoEdit) {
    this.documentoService.updateDocumentos(documentotoEdit);
    jQuery(this.myModalEdit.nativeElement).modal('hide');
  }

}
