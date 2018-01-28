import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { ClienteService } from '../cliente.service';
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
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  @ViewChild('myModal') myModal: ElementRef;
  @ViewChild('myModalEdit') myModalEdit: ElementRef;
  public addClienteForm: FormGroup;
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
  clientetoEdit: any;

  constructor(
    public formBuilder: FormBuilder,
    public clienteService: ClienteService,
    public cargoService: CargoService
  ) {
    this.clientetoEdit = {};
  }

  ngOnInit() {
    this.sex = ['Masculino', 'Femenino'];
    this.addClienteForm = this.formBuilder.group({
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

  addCliente() {
    this.clienteService.createClientes(this.addClienteForm.value);
    this.addClienteForm.reset();

  }

  deleteCliente(cliente) {
    this.clienteService.removeClientes(cliente);
  }

  enableEditing(cliente) {
    jQuery(this.myModalEdit.nativeElement).modal('show');
    this.clientetoEdit = cliente;
  }

  updateCliente(clientetoEdit) {
    this.clienteService.updateClientes(clientetoEdit);
    jQuery(this.myModalEdit.nativeElement).modal('hide');
  }

}
