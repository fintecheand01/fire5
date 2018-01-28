import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { firebase } from '../firebase';
import {  Cliente } from './models';
import { Http } from '@angular/http';


@Injectable()
export class ClienteService {
  private clientesCollection: AngularFirestoreCollection<Cliente>;
  private clientes$: Observable<Cliente[]>;
  private clienteDoc: AngularFirestoreDocument<Cliente>;

  constructor(public afs: AngularFirestore, private http: Http) {
    this.clientesCollection = afs.collection<Cliente>('clientes');
    this.clientes$ = this.clientesCollection.snapshotChanges().map(changes => {
      return changes.map( a => {
        const data = a.payload.doc.data() as Cliente;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getAll() {
    return this.clientes$;
  }
  createClientes(cliente: Cliente) {

    return this.clientesCollection.add(cliente);
  }

  removeClientes(cliente: Cliente) {
    this.clienteDoc = this.afs.doc(`clientes/${cliente.id}`);
    return this.clienteDoc.delete();
  }

  updateClientes(cliente: Cliente) {
    this.clienteDoc = this.afs.doc(`clientes/${cliente.id}`);
    return this.clienteDoc.update(cliente);
  }

}
