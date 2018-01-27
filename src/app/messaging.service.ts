import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import 'rxjs/add/operator/take';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class MessagingService {
  messaging = firebase.messaging();
  token$: Observable<any[]>;
  currentMessage = new BehaviorSubject(null);
  constructor(public afs: AngularFirestore, private db: AngularFireDatabase, private afAuth: AngularFireAuth) { }
  updateToken(token) {
    this.afAuth.authState.take(1).subscribe(user => {
      // tslint:disable-next-line:curly
      if (!user) return;
      const data = { [user.uid]: token };
      const data2 = { uid: token };
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(`fcmTokens/${user.uid}`);
      this.db.object('fcmTokens/').update(data);
      userRef.set(data2, {merge: true});
    });
  }
  getPermission() {
      this.messaging.requestPermission()
      .then(() => {
        console.log('Notification permission granted.');
        return this.messaging.getToken();
      })
      .then(token => {
        this.token$ = token;
        console.log(token);
        this.updateToken(token);
      })
      .catch((err) => {
        console.log('Unable to get permission to notify.', err);
      });
    }
    receiveMessage() {
       this.messaging.onMessage((payload) => {
        console.log('Message received. ', payload);
        this.currentMessage.next(payload);
      });
    }
}
