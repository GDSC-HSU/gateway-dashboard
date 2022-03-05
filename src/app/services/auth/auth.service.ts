import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  createAccount(user: User) {
    return createUserWithEmailAndPassword(this.auth, user.email, user.password!).catch((e: Error)=>{
      throw Error(e.message);
    });
  }

  login(user: User) {
    return signInWithEmailAndPassword(this.auth, user.email, user.password!);
  }

}
