import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor(
    private navCtrl: NavController,
    public route: ActivatedRoute
  ) { }

  goTo(page: string) {
    this.navCtrl.navigateForward(page);
  }

 async getParams(value: string){
  return  this.route.snapshot.paramMap.get(value);
  }
}
