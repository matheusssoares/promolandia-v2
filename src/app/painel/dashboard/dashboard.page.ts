import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit, OnDestroy {
  private user: Usuario;
  private subscriptions: Subscription[] = [];
  constructor(
    private authService: AuthService,
    private navController: NavController
  ) { }

  ngOnInit() {
    const buscar = this.authService.getCurrentUser().subscribe((data) => {
      this.user = data;
      this.validarEmpresas(this.user);

    });

    this.subscriptions.push(buscar);
  }

  logout() {
    this.authService.logout();
  }

  async validarEmpresas(usuario: Usuario) {
    const validation = (await this.authService.isExists('company', 'usuario.key', usuario.key));
    // eslint-disable-next-line no-debugger
    if(!validation) {
      this.navController.navigateRoot(['painel/cadastrar-empresa']);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.map(s => s.unsubscribe());
  }

}
