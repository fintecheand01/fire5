import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Medida } from './models';
@Injectable()
export class MedidaService {
  medidasCollection: AngularFirestoreCollection<Medida>;
  private medidaDoc: AngularFirestoreDocument<Medida>;
  medidas$: Observable<Medida[]>;
  constructor(public afs: AngularFirestore) {
    this.medidasCollection = afs.collection<Medida>('medidas');
    this.medidas$ = this.medidasCollection.snapshotChanges().map(changes => {
      return changes.map( a => {
        const data = a.payload.doc.data() as Medida;
        data.id = a.payload.doc.id;
        return data;
      });
    });
   }

  getAll() {
    return this.medidas$;
  }
  createMedidas(medida: Medida) {
    return this.medidasCollection.add(medida);
  }

  removeMedidas(medida: Medida) {
    this.medidaDoc = this.afs.doc(`medidas/${medida.id}`);
    return this.medidaDoc.delete();
  }

  updateMedidas(medida: Medida) {
    this.medidaDoc = this.afs.doc(`medidas/${medida.id}`);
    return this.medidaDoc.update(medida);
  }
}
