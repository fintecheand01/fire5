import { Component, OnInit, OnDestroy } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { DolenciaService } from '../../dolencia/dolencia.service';
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
  selector: 'app-dolencia',
  templateUrl: './dolencia.component.html',
  styleUrls: ['./dolencia.component.css']
})
export class DolenciaComponent implements OnInit {
  @ViewChild('myModal') myModal: ElementRef;
  @ViewChild('myModalEdit') myModalEdit: ElementRef;
   addDolenciaForm: FormGroup;
   descripcion = new FormControl('', [Validators.required]);

   dolenciatoEdit: any;

  constructor(
    public formBuilder: FormBuilder,
    public afs: AngularFirestore,
    public auth: AuthService,
    public dolenciaService: DolenciaService,
  ) {
    this.dolenciatoEdit = {};
  }

  ngOnInit() {
    this.addDolenciaForm = this.formBuilder.group({
      descripcion: this.descripcion
    });
  }

  showModal() {
    jQuery(this.myModal.nativeElement).modal('show');
  }

  addDolencia() {
    this.dolenciaService.createDolencias(this.addDolenciaForm.value);
    this.addDolenciaForm.reset();

  }

  deleteDolencia(dolencia) {
    this.dolenciaService.removeDolencias(dolencia);
  }

  enableEditing(dolencia) {
    jQuery(this.myModalEdit.nativeElement).modal('show');
    this.dolenciatoEdit = dolencia;
  }

  updateDolencia(dolenciatoEdit) {
    this.dolenciaService.updateDolencias(dolenciatoEdit);
    jQuery(this.myModalEdit.nativeElement).modal('hide');
  }

}
