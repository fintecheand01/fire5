import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { MedicamentoService } from '../medicamento.service';
import { SucursalService } from '../../sucursal/sucursal.service';
import { CategoriaService } from '../../categoria/categoria.service';
import { MedidaService } from '../../medida/medida.service';
import { EmpresaService } from '../../empresa/empresa.service';
import 'rxjs/add/operator/map';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { CategoriaComponent } from '../../categoria/components/categoria.component';
import { Upload } from '../../empresa/models/empresa';
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
  public cantidad = new FormControl('', [Validators.required]);
  public medida = new FormControl('', [Validators.required]);
  public restringido = new FormControl('', [Validators.required]);
  public nombre = new FormControl('', [Validators.required]);
  public dolencia = new FormControl('', [Validators.required]);
  public instruccion = new FormControl('', [Validators.required]);

  selectedFiles: FileList;
  currentUpload: Upload;
  imagen: any;
  uploads: Observable<Upload[]>;
  restringidoM: string[];
  constructor(
    public formBuilder: FormBuilder,
    public medicamentoService: MedicamentoService,
    public sucursalService: SucursalService,
    public categoriaService: CategoriaService,
    public medidaService: MedidaService
  ) {
    this.restringidoM = ['Si', 'No'];
  }

  ngOnInit() {
    this.addMedicamentoForm = this.formBuilder.group({
        presentacion: this.presentacion,
        cantidad: this.cantidad,
        medida: this.medida,
        restringido: this.restringido,
        nombre: this.nombre,
        dolencia: this.dolencia,
        instruccion: this.instruccion
    });
  }

  showModal() {
    jQuery(this.myModal.nativeElement).modal('show');
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  addMedicamento() {
  const file = this.selectedFiles.item(0);
  this.currentUpload = new Upload(file);
  this.medicamentoService.pushUpload(this.currentUpload, this.addMedicamentoForm.value);
  this.addMedicamentoForm.reset();
  this.imagen = '';
  }


  deleteUpload(upload) {
    this.medicamentoService.deleteUpload(upload);
  }

}
