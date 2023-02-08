import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private alertController: AlertController) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.showAlert(error.error.message);
        return throwError(error);
      })
    );
  }

  async showAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Erro',
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
