import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { firebase } from '../firebase';
import {  Empleado } from './models';
import { Http } from '@angular/http';


@Injectable()
export class EmpleadoService {
  private empleadosCollection: AngularFirestoreCollection<Empleado>;
  private empleados$: Observable<Empleado[]>;
  private empleadoDoc: AngularFirestoreDocument<Empleado>;

  constructor(public afs: AngularFirestore, private http: Http) {
    this.empleadosCollection = afs.collection<Empleado>('empleados');
    this.empleados$ = this.empleadosCollection.snapshotChanges().map(changes => {
      return changes.map( a => {
        const data = a.payload.doc.data() as Empleado;
        data.id = a.payload.doc.id;
        return data;
      });
    });


  }
  getAll() {
    return this.empleados$;
  }
  createEmpleados(empleado: Empleado) {

    return this.empleadosCollection.add(empleado);
  }

  removeEmpleados(empleado: Empleado) {
    this.empleadoDoc = this.afs.doc(`empleados/${empleado.id}`);
    return this.empleadoDoc.delete();
  }

  updateEmpleados(empleado: Empleado) {
    this.empleadoDoc = this.afs.doc(`empleados/${empleado.id}`);
    return this.empleadoDoc.update(empleado);
  }

}
