import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { EmpleadoService } from '../empleado.service';
import { CargoService } from '../../cargo/cargo.service';
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
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  @ViewChild('myModal') myModal: ElementRef;
  @ViewChild('myModalEdit') myModalEdit: ElementRef;
  public addEmpleadoForm: FormGroup;
  public nombres = new FormControl('', [Validators.required]);
  public apellidos = new FormControl('', [Validators.required]);
  public fnac = new FormControl('', [Validators.required]);
  public sexo = new FormControl('', [Validators.required]);
  public direccion = new FormControl('', [Validators.required]);
  public celular = new FormControl('', [Validators.required]);
  public dni = new FormControl('', [Validators.required]);
  public cargo = new FormControl('', [Validators.required]);
  public telefono = new FormControl('', [Validators.required]);
  public correo = new FormControl('', [Validators.required]);

  sex: string[];
  empleadotoEdit: any;

  constructor(
    public formBuilder: FormBuilder,
    public empleadoService: EmpleadoService,
    public cargoService: CargoService
  ) {
    this.empleadotoEdit = {};
  }

  ngOnInit() {
    this.sex = ['Masculino', 'Femenino'];
    this.addEmpleadoForm = this.formBuilder.group({
      nombres: this.nombres,
      apellidos: this.apellidos,
      fnac: this.fnac,
      sexo: this.sexo,
      direccion: this.direccion,
      celular: this.celular,
      dni: this.dni,
      cargo: this.cargo,
      telefono: this.telefono,
      correo: this.correo
    });
  }

  showModal() {
    jQuery(this.myModal.nativeElement).modal('show');
  }

  addEmpleado() {
    this.empleadoService.createEmpleados(this.addEmpleadoForm.value);
    this.addEmpleadoForm.reset();

  }

  deleteEmpleado(empleado) {
    this.empleadoService.removeEmpleados(empleado);
  }

  enableEditing(empleado) {
    jQuery(this.myModalEdit.nativeElement).modal('show');
    this.empleadotoEdit = empleado;
  }

  updateEmpleado(empleadotoEdit) {
    this.empleadoService.updateEmpleados(empleadotoEdit);
    jQuery(this.myModalEdit.nativeElement).modal('hide');
  }

}
