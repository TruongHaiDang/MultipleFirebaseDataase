import { Component, Inject } from '@angular/core';
import {AngularFirestore, DocumentChangeAction} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {FIREBASE_REFERENCES} from '../core/firebase/firebase.module';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  databaseChanged: boolean = false;
  readonly helloWorldOne$: Observable<{ [key: string]: any }>;
  readonly helloWorldTwo$: Observable<{ [key: string]: any }>;
  constructor(
    @Inject(FIREBASE_REFERENCES.ONE_FIREAUTH) private readonly firstDb: AngularFireAuth,
    @Inject(FIREBASE_REFERENCES.TWO_FIREAUTH) private readonly secondDb: AngularFireAuth,
  ) {}

  logIn(email, password) {
    if(this.databaseChanged == false) {
      this.firstDb.signInWithEmailAndPassword(email.value, password.value)
      .then((res) => {
        console.log(res)
      }).catch((error) => {
        console.log(error.message)
      })
    }else {
      this.secondDb.signInWithEmailAndPassword(email.value, password.value)
      .then((res) => {
        console.log(res)
      }).catch((error) => {
        console.log(error.message)
      })
    }
  }
}
