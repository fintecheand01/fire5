import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { MedicamentoService } from '../medicamento.service';
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
  selector: 'app-medicamento',
  templateUrl: './medicamento.component.html',
  styleUrls: ['./medicamento.component.css']
})
export class MedicamentoComponent implements OnInit {
  @ViewChild('myModal') myModal: ElementRef;
  @ViewChild('myModalEdit') myModalEdit: ElementRef;
  public addMedicamentoForm: FormGroup;
  public presentacion = new FormControl('', [Validators.required]);
  public unidadMedida = new FormControl('', [Validators.required]);
  public restringido = new FormControl('', [Validators.required]);
  public nombre = new FormControl('', [Validators.required]);
  public dolencia = new FormControl('', [Validators.required]);
  public instruccion = new FormControl('', [Validators.required]);
  public imagen = new FormControl('', [Validators.required]);
  public url = new FormControl('', [Validators.required]);

  constructor(
    public formBuilder: FormBuilder,
    public medicamentoService: MedicamentoService,
    public sucursalService: SucursalService
  ) {  }

  ngOnInit() {
    this.addMedicamentoForm = this.formBuilder.group({
        presentacion: this.presentacion,
        unidadMedida: this.unidadMedida,
        restringido: this.restringido,
        nombre: this.nombre,
        dolencia: this.dolencia,
        instruccion: this.instruccion,
        imagen: this.imagen,
        url: this.url
    });
  }

  showModal() {
    jQuery(this.myModal.nativeElement).modal('show');
  }

}
