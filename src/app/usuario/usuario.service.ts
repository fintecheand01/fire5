import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { firebase } from '../firebase';
import {  Usuario } from './models';
import { Http } from '@angular/http';


@Injectable()
export class UsuarioService {
  private usuariosCollection: AngularFirestoreCollection<Usuario>;
  private usuarios$: Observable<Usuario[]>;
  private usuarioDoc: AngularFirestoreDocument<Usuario>;

  constructor(public afs: AngularFirestore, private http: Http) {
    this.usuariosCollection = afs.collection<Usuario>('usuarios');
    this.usuarios$ = this.usuariosCollection.snapshotChanges().map(changes => {
      return changes.map( a => {
        const data = a.payload.doc.data() as Usuario;
        data.id = a.payload.doc.id;
        return data;
      });
    });


  }
  getAll() {
    return this.usuarios$;
  }
  createUsuarios(usuario: Usuario) {

    return this.usuariosCollection.add(usuario);
  }

  removeUsuarios(usuario: Usuario) {
    this.usuarioDoc = this.afs.doc(`usuarios/${usuario.id}`);
    return this.usuarioDoc.delete();
  }

  updateUsuarios(usuario: Usuario) {
    this.usuarioDoc = this.afs.doc(`usuarios/${usuario.id}`);
    return this.usuarioDoc.update(usuario);
  }

}
