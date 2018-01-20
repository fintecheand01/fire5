import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { firebase } from '../firebase';
import {  Compra } from './models';
import { Http } from '@angular/http';


@Injectable()
export class CompraService {
  private comprasCollection: AngularFirestoreCollection<Compra>;
  private compras$: Observable<Compra[]>;
  private compraDoc: AngularFirestoreDocument<Compra>;

  constructor(public afs: AngularFirestore, private http: Http) {
    this.comprasCollection = afs.collection<Compra>('compras');
    this.compras$ = this.comprasCollection.snapshotChanges().map(changes => {
      return changes.map( a => {
        const data = a.payload.doc.data() as Compra;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getAll() {
    return this.compras$;
  }
  createCompras(compra: Compra) {

    return this.comprasCollection.add(compra);
  }

  removeCompras(compra: Compra) {
    this.compraDoc = this.afs.doc(`compras/${compra.id}`);
    return this.compraDoc.delete();
  }

  updateCompras(compra: Compra) {
    this.compraDoc = this.afs.doc(`compras/${compra.id}`);
    return this.compraDoc.update(compra);
  }

}
