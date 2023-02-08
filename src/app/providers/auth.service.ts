import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AngularFireAuth
  ) { }

  async createAccount(email: string, password: string) {
    try {
      const result = await this.auth.createUserWithEmailAndPassword(email, password);
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }

  }
}
