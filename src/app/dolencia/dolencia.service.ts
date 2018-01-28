import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Dolencia } from './models';
@Injectable()
export class DolenciaService {
  dolenciasCollection: AngularFirestoreCollection<Dolencia>;
  private dolenciaDoc: AngularFirestoreDocument<Dolencia>;
  dolencias$: Observable<Dolencia[]>;
  constructor(public afs: AngularFirestore) {
    this.dolenciasCollection = afs.collection<Dolencia>('dolencias');
    this.dolencias$ = this.dolenciasCollection.snapshotChanges().map(changes => {
      return changes.map( a => {
        const data = a.payload.doc.data() as Dolencia;
        data.id = a.payload.doc.id;
        return data;
      });
    });
   }

   getAll() {
    return this.dolencias$;
  }
  createDolencias(dolencia: Dolencia) {
    return this.dolenciasCollection.add(dolencia);
  }

  removeDolencias(dolencia: Dolencia) {
    this.dolenciaDoc = this.afs.doc(`dolencias/${dolencia.id}`);
    return this.dolenciaDoc.delete();
  }

  updateDolencias(dolencia: Dolencia) {
    this.dolenciaDoc = this.afs.doc(`dolencias/${dolencia.id}`);
    return this.dolenciaDoc.update(dolencia);
  }
}
