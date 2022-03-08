import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { FirebaseError } from 'firebase/app';
import { signInWithEmailAndPassword, User} from 'firebase/auth';
import { AppUser } from 'src/app/models/app-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user!: User | null;
  constructor(private auth: Auth) {
    this.auth.onAuthStateChanged(user => this.user = user);
  }

  createAccount(user: AppUser) {
    return createUserWithEmailAndPassword(this.auth, user.email, user.password!).catch((e: FirebaseError) => {
      throw Error(e.code);
    });
  }

  login(user: AppUser) {
    return signInWithEmailAndPassword(this.auth, user.email, user.password!).then(user => {
      console.log(user.user.getIdToken());
    });
  }

  isUserLogin(): Promise<boolean>{
    return new Promise((resolve, reject) => {
      this.auth.onAuthStateChanged((user) => {
        if (user) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }

}
