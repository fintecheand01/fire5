import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import {  Medicamento } from './models';



@Injectable()
export class MedicamentoService {
  private medicamentosCollection: AngularFirestoreCollection<Medicamento>;
  private medicamentos$: Observable<Medicamento[]>;
  private medicamentoDoc: AngularFirestoreDocument<Medicamento>;

  constructor(public afs: AngularFirestore) {
    this.medicamentosCollection = afs.collection<Medicamento>('medicamentos');
    this.medicamentos$ = this.medicamentosCollection.snapshotChanges().map(changes => {
      return changes.map( a => {
        const data = a.payload.doc.data() as Medicamento;
        data.id = a.payload.doc.id;
        return data;
      });
    });


  }
  getAll() {
    return this.medicamentos$;
  }
  createMedicamentos(medicamento: Medicamento) {

    return this.medicamentosCollection.add(medicamento);
  }

  removeMedicamentos(medicamento: Medicamento) {
    this.medicamentoDoc = this.afs.doc(`medicamentos/${medicamento.id}`);
    return this.medicamentoDoc.delete();
  }

  updateMedicamentos(medicamento: Medicamento) {
    this.medicamentoDoc = this.afs.doc(`medicamentos/${medicamento.id}`);
    return this.medicamentoDoc.update(medicamento);
  }

}
