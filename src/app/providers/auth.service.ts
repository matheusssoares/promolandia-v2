import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import firebase from 'firebase/compat/app';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Usuario } from '../models/usuario.model';
import { Observable } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AngularFireAuth,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private db: AngularFirestore,
    private toastController: ToastController,
    private router: Router
  ) { }

  async createAccount(usuario) {
    try {
      const result = await this.auth.createUserWithEmailAndPassword(usuario.email, usuario.password);
      if (result) {
        const usuarioData: Usuario = {
          name: usuario.name,
          createIn: new Date(),
          email: usuario.email,
          key: result.user.uid,
          password: usuario.password,
          photoProfile: '',
          status: true,
          updateIn: new Date()
        };
        const createData = await this.createDb('user', result.user.uid, usuarioData);
        if(createData) {
          // eslint-disable-next-line no-debugger
          await this.presentToast('Conta criada com sucesso!', 3000);
          return true;
        }
      }
      return result;
    } catch (error) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          this.presentAlert('Opsss!', 'Este e-mail já está vinculado em outra conta.');
          break;

        case 'auth/invalid-email':
          this.presentAlert('Opsss!', 'Este e-mail é inválido.');
          break;

        case 'auth/operation-not-allowed':
          this.presentAlert('Opsss!', 'Temporariamente bloqueada esta opção.');
          break;

        case 'auth/weak-password':
          this.presentAlert('Opsss!', 'Temporariamente bloqueada esta opção.');
          break;
      }
      this.hideLoading();
      console.error(error);
      throw error;
    }

  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['Ok'],
    });
    await alert.present();
  }

  async showLoading(message: string) {
    const loading = await this.loadingCtrl.create({
      message,
    });

    loading.present();
  }

  async hideLoading() {
    await this.loadingCtrl.dismiss();
  }

  async createDb(collection: string, key: string, data: any) {
    try {
      const result = await this.db.collection(collection).doc(key).set(data).then(() => true);
      // eslint-disable-next-line no-debugger
      return result;

    } catch (error) {
      this.presentAlert('Opsss!', 'Algo deu errado.');
    }
  }

  async presentToast(message: string, duration?: 3000) {
    const toast = await this.toastController.create({
      message,
      duration,
      icon: 'checkmark-circle-outline',
      color: 'dark'
    });

    await toast.present();
  }

  getCurrentUser(): Observable<any> {
    return this.auth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.db.collection('user').doc(user.uid).valueChanges();
        } else {
          return [];
        }
      })
    );
  }

  createId() {
    return this.db.createId();
  }

  async isExists(collecion: string, fieldPath: string, value: any) {
    const result = await this.db.collection(collecion).ref.where(fieldPath, '==', value).get();
    return result.size > 0;
  }

  async login(form) {
    try {
      const result = await this.auth.signInWithEmailAndPassword(form.email, form.password).then(r => r);
      return result;
    } catch (error) {
      await this.hideLoading();
      switch (error.code) {
        case 'auth/invalid-email':
          await this.presentAlert('Opsss!', 'Email inválido.');
          break;

        case 'auth/user-disabled':
          await this.presentAlert('Opsss!', 'Usuário bloqueado.');
          break;

        case 'auth/user-not-found':
          await this.presentAlert('Opsss!', 'Nenhum usuário com as credenciais informadas.');
          break;

        case 'auth/wrong-password':
          await this.presentAlert('Opsss!', 'Senha não confere com a registrada em nossa base de dados.');
          break;
      }
    }
  }

  async logout() {
    const result = await this.auth.signOut().then(data => data);
    this.router.navigate(['painel/login']);
  }

  canActivate() {
    return this.auth.authState.pipe(
      take(1),
      map(user => !!user),
      tap(loggedIn => {
        if (!loggedIn) {
          this.router.navigate(['painel/login']);
        }
      })
    );
  }

  async isLogged() {
    return this.auth.authState.pipe(
      take(1),
      map(user => !!user),
      tap(logged => logged)
    );
  }
}
