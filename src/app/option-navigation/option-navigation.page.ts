import { Component, OnInit } from '@angular/core';
import { RoutesService } from '../providers/routes.service';

@Component({
  selector: 'app-option-navigation',
  templateUrl: './option-navigation.page.html',
  styleUrls: ['./option-navigation.page.scss'],
})
export class OptionNavigationPage implements OnInit {

  constructor(
    private routesService: RoutesService
  ) {

  }

  ngOnInit() {
  }

  onClick(page: string) {
    if(page === 'anunciante') {
      this.routesService.goTo('painel/login');
    } else {
      this.routesService.goTo('app');
    }
  }

}
