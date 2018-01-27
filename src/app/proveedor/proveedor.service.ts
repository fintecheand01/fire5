import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireDatabase  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/combineLatest';
import * as firebase from 'firebase';
import { Http } from '@angular/http';
import { Proveedor } from './models/proveedor';

@Injectable()
export class ProveedorService {
  proveedoresCollection: AngularFirestoreCollection<Proveedor>;
  proveedores$: Observable<Proveedor[]>;
  proveedorDoc: AngularFirestoreDocument<Proveedor>;


  constructor(public afs: AngularFirestore, private http: Http) {

    this.proveedoresCollection = afs.collection<any>('proveedores');
    this.proveedores$ = this.proveedoresCollection.snapshotChanges().map(changes => {
      return changes.map( a => {
        const data = a.payload.doc.data() as Proveedor;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getAll() {
    return this.proveedores$;
  }
  createProveedores(proveedor: Proveedor) {
    return this.proveedoresCollection.add(proveedor);
  }

  removeProveedores(proveedor: Proveedor) {
    this.proveedorDoc = this.afs.doc(`proveedores/${proveedor.id}`);
    return this.proveedorDoc.delete();
  }

  updateProveedores(proveedor: Proveedor) {
    this.proveedorDoc = this.afs.doc(`proveedores/${proveedor.id}`);
    return this.proveedorDoc.update(proveedor);
  }
}
