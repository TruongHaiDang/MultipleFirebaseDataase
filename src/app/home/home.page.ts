import { Component, Inject } from '@angular/core';
import {AngularFirestore, DocumentChangeAction} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map, first} from 'rxjs/operators';
import {FIREBASE_REFERENCES} from '../core/firebase/firebase.module';
import {AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { TodoPage } from '../todo/todo.page';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  databaseChanged: boolean = false;
  constructor(
    @Inject(FIREBASE_REFERENCES.ONE_FIREAUTH) private readonly firstDb: AngularFireAuth,
    @Inject(FIREBASE_REFERENCES.TWO_FIREAUTH) private readonly secondDb: AngularFireAuth,
    private router: Router,
    private storage: Storage
  ) {
    storage.get('databaseChanged').then((val) => {
      this.databaseChanged = val;
    });
    this.firstDb.onAuthStateChanged((user) => {
      if(user) {
        this.router.navigate(["/todo"], {state: {data: {databaseChanged: this.databaseChanged}}});
      }
    });
    this.secondDb.onAuthStateChanged((user) => {
      if(user) {
        this.router.navigate(["/todo"], {state: {data: {databaseChanged: this.databaseChanged}}});
      }
    });
  }

  logIn(email, password) {
    this.storage.set('databaseChanged', this.databaseChanged);
    if(this.databaseChanged == false) {
      this.firstDb.signInWithEmailAndPassword(email.value, password.value)
      .then((res) => {
        console.log(res);
        this.router.navigate(["/todo"], {state: {data: {databaseChanged: this.databaseChanged}}});
      }).catch((error) => {
        console.log(error.message)
      })
    }else {
      this.secondDb.signInWithEmailAndPassword(email.value, password.value)
      .then((res) => {
        console.log(res);
        this.router.navigate(["/todo"], {state: {data: {databaseChanged: this.databaseChanged}}});
      }).catch((error) => {
        console.log(error.message)
      })
    }
  }
}
