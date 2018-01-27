import { Component, OnInit, OnDestroy } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { MedidaService } from '../../medida/medida.service';
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
  selector: 'app-medida',
  templateUrl: './medida.component.html',
  styleUrls: ['./medida.component.css']
})
export class MedidaComponent implements OnInit {
  @ViewChild('myModal') myModal: ElementRef;
  @ViewChild('myModalEdit') myModalEdit: ElementRef;
   addMedidaForm: FormGroup;
   descripcion = new FormControl('', [Validators.required]);

   medidatoEdit: any;

  constructor(
    public formBuilder: FormBuilder,
    public afs: AngularFirestore,
    public auth: AuthService,
    public medidaService: MedidaService,
  ) {
    this.medidatoEdit = {};
  }

  ngOnInit() {
    this.addMedidaForm = this.formBuilder.group({
      descripcion: this.descripcion
    });
  }

  showModal() {
    jQuery(this.myModal.nativeElement).modal('show');
  }

  addMedida() {
    this.medidaService.createMedidas(this.addMedidaForm.value);
    this.addMedidaForm.reset();

  }

  deleteMedida(medida) {
    this.medidaService.removeMedidas(medida);
  }

  enableEditing(medida) {
    jQuery(this.myModalEdit.nativeElement).modal('show');
    this.medidatoEdit = medida;
  }

  updateMedida(medidatoEdit) {
    this.medidaService.updateMedidas(medidatoEdit);
    jQuery(this.myModalEdit.nativeElement).modal('hide');
  }

}
