import { Component, OnInit, OnDestroy } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { CargoService } from '../../cargo/cargo.service';
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
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoComponent implements OnInit {
  @ViewChild('myModal') myModal: ElementRef;
  @ViewChild('myModalEdit') myModalEdit: ElementRef;
   addCargoForm: FormGroup;
   descripcion = new FormControl('', [Validators.required]);

   cargotoEdit: any;

  constructor(
    public formBuilder: FormBuilder,
    public afs: AngularFirestore,
    public auth: AuthService,
    public cargoService: CargoService,
  ) {
    this.cargotoEdit = {};
  }

  ngOnInit() {
    this.addCargoForm = this.formBuilder.group({
      descripcion: this.descripcion
    });
  }

  showModal() {
    jQuery(this.myModal.nativeElement).modal('show');
  }

  addCargo() {
    this.cargoService.createCargos(this.addCargoForm.value);
    this.addCargoForm.reset();

  }

  deleteCargo(cargo) {
    this.cargoService.removeCargos(cargo);
  }

  enableEditing(cargo) {
    jQuery(this.myModalEdit.nativeElement).modal('show');
    this.cargotoEdit = cargo;
  }

  updateCargo(cargotoEdit) {
    this.cargoService.updateCargos(cargotoEdit);
    jQuery(this.myModalEdit.nativeElement).modal('hide');
  }

}
