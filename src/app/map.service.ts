import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { GeoJson } from './map';
import * as mapboxgl from 'mapbox-gl';
@Injectable()
export class MapService {
  private mapsCollection: AngularFirestoreCollection<any>;
  private maps$: Observable<any[]>;
  private mapDoc: AngularFirestoreDocument<any>;
  constructor(public afs: AngularFirestore) {
    mapboxgl.accessToken = environment.mapbox.accessToken;

    this.mapsCollection = afs.collection<any>('markers');
    this.maps$ = this.mapsCollection.snapshotChanges().map(changes => {
      return changes.map( a => {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }
  getMarkers() {
    return this.maps$;
  }
  createMarker(data: GeoJson) {
    return this.mapsCollection.add(data);
  }
  removeMarker(data) {
    this.mapDoc = this.afs.doc(`markers/${data.id}`);
    return this.mapDoc.delete();
  }
}
