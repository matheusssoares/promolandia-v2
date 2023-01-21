import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor(
    private navCtrl: NavController
  ) { }

  goTo(page: string) {
    this.navCtrl.navigateForward(page);
  }
}
