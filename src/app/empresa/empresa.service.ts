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
import { Upload, Empresa } from './models/empresa';



@Injectable()
export class EmpresaService {
  uploadsCollection: AngularFirestoreCollection<any>;
  uploads$: Observable<any[]>;
  uploadDoc: AngularFirestoreDocument<Upload>;

  empresaCollection: AngularFirestoreCollection<Empresa>;
  empresa$: Observable<Empresa[]>;
  empresaDoc: AngularFirestoreDocument<Empresa>;


  constructor(public afs: AngularFirestore, private http: Http) {

    this.uploadsCollection = afs.collection<any>('upload');
    this.uploads$ = this.uploadsCollection.snapshotChanges().map(changes => {
      return changes.map( a => {
        const data = a.payload.doc.data() as Upload;
        data.id = a.payload.doc.id;
        return data;
      });
    });

    this.empresaCollection = afs.collection<any>('empresa');
    this.empresa$ = this.empresaCollection.snapshotChanges().map(changes => {
      return changes.map( a => {
        const data = a.payload.doc.data() as Empresa;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getUploads() {
    const storageRef = firebase.storage().ref();
    return this.uploads$;
  }

  getEmpresa() {
    return this.empresa$;
  }

  pushUpload(upload: Upload, empresa: Empresa) {
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
        this.saveFileData(upload, empresa);
      }
    );
  }

  private saveFileData(upload, empresa) {
    const obj: any =  {};
    obj.name = upload.name;
    obj.progress = upload.progress;
    obj.url = upload.url;
    empresa.logo = upload.url;
    this.uploadsCollection.add(obj);
    this.empresaCollection.add(empresa);
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
