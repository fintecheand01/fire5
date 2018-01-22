import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Cargo } from './models';
@Injectable()
export class CargoService {
  cargosCollection: AngularFirestoreCollection<Cargo>;
  private cargoDoc: AngularFirestoreDocument<Cargo>;
  cargos$: Observable<Cargo[]>;
  constructor(public afs: AngularFirestore) {
    this.cargosCollection = afs.collection<Cargo>('cargos');
    this.cargos$ = this.cargosCollection.snapshotChanges().map(changes => {
      return changes.map( a => {
        const data = a.payload.doc.data() as Cargo;
        data.id = a.payload.doc.id;
        return data;
      });
    });
   }

   getAll() {
    return this.cargos$;
  }
  createCargos(cargo: Cargo) {
    return this.cargosCollection.add(cargo);
  }

  removeCargos(cargo: Cargo) {
    this.cargoDoc = this.afs.doc(`cargos/${cargo.id}`);
    return this.cargoDoc.delete();
  }

  updateCargos(cargo: Cargo) {
    this.cargoDoc = this.afs.doc(`cargos/${cargo.id}`);
    return this.cargoDoc.update(cargo);
  }
}
