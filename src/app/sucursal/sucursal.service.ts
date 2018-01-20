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
import { Sucursal } from './models/sucursal';
import { SucursalComponent } from './components/sucursal.component';



@Injectable()
export class SucursalService {
  sucursalesCollection: AngularFirestoreCollection<Sucursal>;
  sucursales$: Observable<Sucursal[]>;
  sucursalDoc: AngularFirestoreDocument<Sucursal>;


  constructor(public afs: AngularFirestore, private http: Http) {

    this.sucursalesCollection = afs.collection<any>('sucursal');
    this.sucursales$ = this.sucursalesCollection.snapshotChanges().map(changes => {
      return changes.map( a => {
        const data = a.payload.doc.data() as Sucursal;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getAll() {
    return this.sucursales$;
  }
  createSucursales(sucursal: Sucursal) {
    return this.sucursalesCollection.add(sucursal);
  }

  removeSucursales(sucursal: Sucursal) {
    this.sucursalDoc = this.afs.doc(`sucursales/${sucursal.id}`);
    return this.sucursalDoc.delete();
  }

  updateSucursales(sucursal: Sucursal) {
    this.sucursalDoc = this.afs.doc(`sucursales/${sucursal.id}`);
    return this.sucursalDoc.update(sucursal);
  }
}
