import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { getMaxListeners } from 'process';
import {AngularFirestore, DocumentChangeAction} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {FIREBASE_REFERENCES} from '../core/firebase/firebase.module';
import {AngularFireAuth} from '@angular/fire/auth';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {
  databaseChanged: boolean;
  constructor(
    private router: Router,
    private menu: MenuController,
    private navCtrl: NavController,
    @Inject(FIREBASE_REFERENCES.ONE_FIREAUTH) private readonly firstDb: AngularFireAuth,
    @Inject(FIREBASE_REFERENCES.TWO_FIREAUTH) private readonly secondDb: AngularFireAuth,
    @Inject(FIREBASE_REFERENCES.ONE_FIRESTORE) private readonly firstFire: AngularFirestore,
    @Inject(FIREBASE_REFERENCES.TWO_FIRESTORE) private readonly secondFire: AngularFirestore,
    @Inject(FIREBASE_REFERENCES.ONE_REALDATA) private readonly firstDatabase: AngularFireDatabase,
    @Inject(FIREBASE_REFERENCES.TWO_REALDATA) private readonly secondDatabase: AngularFireDatabase,
  ) { 
    this.databaseChanged = this.router.getCurrentNavigation().extras.state.data.databaseChanged;
  }

  ngOnInit() {
    
  }

  openMenu() {
    this.menu.enable(true, 'menu');
    this.menu.open('menu');
  }

  logOut() {
    if(this.databaseChanged == false) {
      this.firstDb.signOut().then(() => {this.navCtrl.navigateRoot('/home')});
    }else {
      this.secondDb.signOut().then(() => {this.navCtrl.navigateRoot('/home')});
    }
  }

  addDocs(name, price) {
    let data = {
      name: name.value,
      price: price.value
    };
    if(this.databaseChanged == false) {
      this.firstFire.collection("Product").add(data)
      .then((ref) => {
        (<HTMLInputElement>document.getElementById('name')).value = "";
        (<HTMLInputElement>document.getElementById('price')).value = "";
      })
      .catch((err) => {console.log(err)})
    }else {
      this.secondFire.collection("Product").add(data)
      .then((ref) => {
        (<HTMLInputElement>document.getElementById('name')).value = "";
        (<HTMLInputElement>document.getElementById('price')).value = "";
      })
      .catch((err) => {console.log(err)})
    }
  }

  pushDocs(name, price) {
    let data = {
      name: name.value,
      price: price.value
    };
    if(this.databaseChanged == false) {
      this.firstDatabase.object('Product').set(data)
      .then((ref) => {
        (<HTMLInputElement>document.getElementById('name')).value = "";
        (<HTMLInputElement>document.getElementById('price')).value = "";
      })
      .catch((err) => {console.log(err)})
    }else {
      this.secondDatabase.object('/Product/').set(data)
      .then((ref) => {
        (<HTMLInputElement>document.getElementById('name')).value = "";
        (<HTMLInputElement>document.getElementById('price')).value = "";
      })
      .catch((err) => {console.log(err)})
    }
  }

}