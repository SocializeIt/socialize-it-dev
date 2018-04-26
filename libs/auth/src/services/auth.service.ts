import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Authenticate } from '@socialise-it/data-models';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  isAuthenticated = false;
  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.auth.onAuthStateChanged(u => {
      this.setAuthVariables(u);
    });
  }

  subscribeToAuthStateChanges(callback) {}

  setAuthVariables(arg) {
    if (arg && arg.uid) {
      this.isAuthenticated = true;
      localStorage.setItem(
        'auth',
        JSON.stringify({ uid: arg.uid, session: arg })
      );
      console.log(arg);
    } else {
      this.isAuthenticated = false;
    }
  }

  getAuthVariables() {
    const storage = localStorage.getItem('auth');
    if (storage) {
      return JSON.parse(storage);
    } else {
      return null;
      // { uid: '', session: ''};
    }
  }

  login(authenticate: Authenticate) {
    return this.afAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }
}
