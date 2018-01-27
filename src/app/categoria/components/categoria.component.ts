import { Component, OnInit, OnDestroy } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { CategoriaService } from '../../categoria/categoria.service';
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
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  @ViewChild('myModal') myModal: ElementRef;
  @ViewChild('myModalEdit') myModalEdit: ElementRef;
   addCategoriaForm: FormGroup;
   descripcion = new FormControl('', [Validators.required]);

   categoriatoEdit: any;

  constructor(
    public formBuilder: FormBuilder,
    public afs: AngularFirestore,
    public auth: AuthService,
    public categoriaService: CategoriaService,
  ) {
    this.categoriatoEdit = {};
  }

  ngOnInit() {
    this.addCategoriaForm = this.formBuilder.group({
      descripcion: this.descripcion
    });
  }

  showModal() {
    jQuery(this.myModal.nativeElement).modal('show');
  }

  addCategoria() {
    this.categoriaService.createCategorias(this.addCategoriaForm.value);
    this.addCategoriaForm.reset();

  }

  deleteCategoria(categoria) {
    this.categoriaService.removeCategorias(categoria);
  }

  enableEditing(categoria) {
    jQuery(this.myModalEdit.nativeElement).modal('show');
    this.categoriatoEdit = categoria;
  }

  updateCategoria(categoriatoEdit) {
    this.categoriaService.updateCategorias(categoriatoEdit);
    jQuery(this.myModalEdit.nativeElement).modal('hide');
  }

}
