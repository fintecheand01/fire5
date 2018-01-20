import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { firebase } from '../firebase';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { Subject } from 'rxjs/Subject';
import { User } from './user';

@Injectable()
export class AuthService {
  authenticated$: Observable<boolean>;
  uid$: Observable<string>;
  display$: Observable<any>;
  nombreBS$: BehaviorSubject<string|null>;
  visible$: Observable<any>;
  visibleBS$: ReplaySubject<boolean|null>;
  subject = new Subject<any>();

  user$: Observable<User>;

  constructor( private afs: AngularFirestore, public afAuth: AngularFireAuth) {
    this.authenticated$ = afAuth.authState.map(user => !!user);
    this.uid$ = afAuth.authState.map(user => user.uid);
    this.display$ = afAuth.authState.map(user => user.providerData[0].providerId);
    this.user$ = this.afAuth.authState
        .switchMap(user => {
          if (user) {
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
          } else {
            return Observable.of(null);
          }
        });
   }

  signIn(provider: firebase.auth.AuthProvider) {
    return this.afAuth.auth.signInWithPopup(provider)
    .then( (credential) => {
      this.updateUserData(credential.user);
    })
      .catch(error => console.log('ERROR @ AuthService#signIn() :', error));

  }

  signInAnonymously() {
    return this.afAuth.auth.signInAnonymously()
      .catch(error => console.log('ERROR @ AuthService#signInAnonymously() :', error));
  }

  signInWithGithub() {
    return this.signIn(new firebase.auth.GithubAuthProvider());
  }

  signInWithGoogle() {
    return this.signIn(new firebase.auth.GoogleAuthProvider());

  }

  signInWithTwitter() {
    return this.signIn(new firebase.auth.TwitterAuthProvider());
  }

  signInWithFacebook() {
    return this.signIn(new firebase.auth.FacebookAuthProvider())
    .then();
  }

  signOut(): void {
    this.afAuth.auth.signOut();
  }

  emailSignUp(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => console.log(user))
      .catch(error => console.log(error));
  }

  emailLogin(email: string, password: string) {
     return this.afAuth.auth.signInWithEmailAndPassword(email, password)
       .then((user) =>  this.updateAdminrData(user))
       .catch(error => console.log(error));
  }

  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      roles: {
        subscriber: true
      }
    };
    return userRef.set(data, { merge: true });
  }

  private updateAdminrData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      roles: {
        admin: true,
        editor: true,
        subscriber: true,
      }
    };
    return userRef.set(data, { merge: true });
  }

  ///// Role-based Authorization /////

  canRead(user: User): boolean {
    const allowed = ['admin', 'editor', 'subscriber'];
    return this.checkAuthorization(user, allowed);
  }

  canEdit(user: User): boolean {
    const allowed = ['admin', 'editor'];
    return this.checkAuthorization(user, allowed);
  }

  canDelete(user: User): boolean {
    const allowed = ['admin'];
    return this.checkAuthorization(user, allowed);
  }

   // determines if user has matching role
   private checkAuthorization(user: User, allowedRoles: string[]): boolean {
    // tslint:disable-next-line:curly
    if (!user) return false;
    for (const role of allowedRoles) {
      if ( user.roles[role] ) {
        return true;
      }
    }
    return false;
  }
}


