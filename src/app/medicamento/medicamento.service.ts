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
import { Upload, Medicamento } from './models/medicamento';



@Injectable()
export class MedicamentoService {
  uploadsCollection: AngularFirestoreCollection<any>;
  uploads$: Observable<any[]>;
  uploadDoc: AngularFirestoreDocument<Upload>;

  medicamentoCollection: AngularFirestoreCollection<Medicamento>;
  medicamento$: Observable<Medicamento[]>;
  medicamentoDoc: AngularFirestoreDocument<Medicamento>;


  constructor(public afs: AngularFirestore, private http: Http) {

    this.uploadsCollection = afs.collection<any>('upload');
    this.uploads$ = this.uploadsCollection.snapshotChanges().map(changes => {
      return changes.map( a => {
        const data = a.payload.doc.data() as Upload;
        data.id = a.payload.doc.id;
        return data;
      });
    });

    this.medicamentoCollection = afs.collection<any>('medicamento');
    this.medicamento$ = this.medicamentoCollection.snapshotChanges().map(changes => {
      return changes.map( a => {
        const data = a.payload.doc.data() as Medicamento;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getUploads() {
    const storageRef = firebase.storage().ref();
    return this.uploads$;
  }

  getMedicamento() {
    return this.medicamento$;
  }

  pushUpload(upload: Upload, medicamento: Medicamento) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child('upload/' + upload.file.name).put(upload.file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>  {
        // upload in progress
        upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100 ;
      },
      (error) => {
        // upload failed
        console.log(error);
      },
      () => {
        // upload success
        upload.url = uploadTask.snapshot.downloadURL;
        upload.name = upload.file.name;
        this.saveFileData(upload, medicamento);
      }
    );
  }

  private saveFileData(upload, medicamento) {
    const obj: any =  {};
    obj.name = upload.name;
    obj.progress = upload.progress;
    obj.url = upload.url;
    medicamento.logo = upload.url;
    this.uploadsCollection.add(obj);
    this.medicamentoCollection.add(medicamento);
  }

  deleteUpload(upload: any) {
    this.deleteFileData(upload.id);
    this.deleteFileStorage(upload.name);
   }
  // Deletes the file details from the realtime db
  private deleteFileData(id: string) {
    this.uploadDoc = this.afs.doc('upload/' + id);
    return this.uploadDoc.delete();
  }
  // Firebase files must have unique names in their respective storage dir
  // So the name serves as a unique key
  private deleteFileStorage(name: string) {
    const storageRef = firebase.storage().ref();
    storageRef.child(`upload/${name}`).delete();
  }

}
