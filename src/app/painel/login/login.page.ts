import { Component, OnInit } from '@angular/core';
import { RoutesService } from 'src/app/providers/routes.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private routes: RoutesService
  ) { }

  ngOnInit() {
  }

  goTo(page: string) {
    this.routes.goTo(page);
  }

}
