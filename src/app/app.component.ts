import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { URLSearchParams } from '@angular/http';

import { AuthService } from './auth';
import { MessagingService } from './messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentChoice: String;
  message;
  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;
  title = 'app';
  constructor(public http: Http, db: AngularFirestore, public auth: AuthService, private msgService: MessagingService) {
    this.currentChoice = 'home';
  }

  ngOnInit() {
    this.msgService.getPermission();
    this.msgService.receiveMessage();
    this.message = this.msgService.currentMessage;
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


  alerta() {
    alert(this.msgService.token$);
    // tslint:disable-next-line:max-line-length
    const authData = 'AAAAkgUsueA:APA91bEWFU_vwsPqA2K2Op22Z0rKqXiCNl_8_tp8VExdiKRWVcxw33rR1sBkXYpYjOu8UkpyeVBPv4Dl9UeGcqqvCTudN41w7-9Ad6M7mAZ8UqaAgl31vlHIb4C34l1RCZi7lJ14nxB_';
    const payload = {'notification': {'title': 'Test title', 'body': 'Test Body', 'click_action' : 'https://angularfirebase.com'},
    // tslint:disable-next-line:max-line-length
    'to' : this.msgService.token$};
    const myHeaders = new Headers({
       'Content-Type': 'application/json',
       'Authorization': 'Key = ' +  authData
    });
    // tslint:disable-next-line:max-line-length
     return this.http.post('https://fcm.googleapis.com/fcm/send', payload, { headers: myHeaders } ).subscribe( s => console.log(s),
     e => console.log(e));
  }
}
