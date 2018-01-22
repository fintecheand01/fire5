import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AuthService } from './auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentChoice: String;
  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;
  title = 'app';
  constructor(db: AngularFirestore, public auth: AuthService) {
    this.currentChoice = 'home';
  }

  setActive(choice: string): void {
    this.currentChoice = choice;
  }

  getActive(choice: string): string {
  if (this.currentChoice === choice) {
         return 'active';
    } else {
         return 'not'; }
  }
}
