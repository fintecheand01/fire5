import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { firebase } from '../firebase';
import {  Venta } from './models';
import { Http } from '@angular/http';


@Injectable()
export class VentaService {
  private ventasCollection: AngularFirestoreCollection<Venta>;
  private ventas$: Observable<Venta[]>;
  private ventaDoc: AngularFirestoreDocument<Venta>;

  constructor(public afs: AngularFirestore, private http: Http) {
    this.ventasCollection = afs.collection<Venta>('ventas');
    this.ventas$ = this.ventasCollection.snapshotChanges().map(changes => {
      return changes.map( a => {
        const data = a.payload.doc.data() as Venta;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getAll() {
    return this.ventas$;
  }
  createVentas(venta: Venta) {

    return this.ventasCollection.add(venta);
  }

  removeVentas(venta: Venta) {
    this.ventaDoc = this.afs.doc(`ventas/${venta.id}`);
    return this.ventaDoc.delete();
  }

  updateVentas(venta: Venta) {
    this.ventaDoc = this.afs.doc(`ventas/${venta.id}`);
    return this.ventaDoc.update(venta);
  }

}
