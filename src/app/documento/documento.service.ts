import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Documento } from './models';
@Injectable()
export class DocumentoService {
  documentosCollection: AngularFirestoreCollection<Documento>;
  private documentoDoc: AngularFirestoreDocument<Documento>;
  documentos$: Observable<Documento[]>;
  constructor(public afs: AngularFirestore) {
    this.documentosCollection = afs.collection<Documento>('documentos');
    this.documentos$ = this.documentosCollection.snapshotChanges().map(changes => {
      return changes.map( a => {
        const data = a.payload.doc.data() as Documento;
        data.id = a.payload.doc.id;
        return data;
      });
    });
   }

   getAll() {
    return this.documentos$;
  }
  createDocumentos(documento: Documento) {
    return this.documentosCollection.add(documento);
  }

  removeDocumentos(documento: Documento) {
    this.documentoDoc = this.afs.doc(`documentos/${documento.id}`);
    return this.documentoDoc.delete();
  }

  updateDocumentos(documento: Documento) {
    this.documentoDoc = this.afs.doc(`documentos/${documento.id}`);
    return this.documentoDoc.update(documento);
  }
}
