import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { CompraService } from '../compra.service';
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
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  @ViewChild('myModal') myModal: ElementRef;
  @ViewChild('myModalEdit') myModalEdit: ElementRef;
  public addCompraForm: FormGroup;
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

  itemList: any[];
  constructor(
    public formBuilder: FormBuilder,
    public compraService: CompraService,
    public sucursalService: SucursalService
  ) { 
    this.itemList = [{lastname: 'Pretell', middlename: 'Gary'},{lastname: 'Perez', middlename: 'Luis'}];
   }

  ngOnInit() {
    this.addCompraForm = this.formBuilder.group({
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

  itemPush() {
    this.itemList.push({});
  }


}
