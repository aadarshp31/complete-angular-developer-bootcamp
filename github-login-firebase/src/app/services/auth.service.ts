import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  // Returns and obervable
  signup(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password)
  }

  // Returns and obervable
  signin(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  // Get user deails when user is successfully logged in
  getUser() {
    return this.auth.authState
  }

  signout() {
    return this.auth.signOut;
  }

}
