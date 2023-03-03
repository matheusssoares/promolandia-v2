import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Empresa } from 'src/app/models/empresa.model';
import { Usuario } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit, OnDestroy {
  private user: Usuario;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  public imagem = '../../../assets/img/user.png';
  // eslint-disable-next-line @typescript-eslint/member-ordering
  public nome = '';
  // eslint-disable-next-line @typescript-eslint/member-ordering
  public company: Array<Empresa>;
  private subscriptions: Subscription[] = [];
  // eslint-disable-next-line @typescript-eslint/member-ordering
  loaded = false;
  constructor(
    private authService: AuthService,
    private navController: NavController
  ) { }

  async ngOnInit() {
    await this.authService.showLoading('Aguarde...');
    const buscar = this.authService.getCurrentUser().subscribe((data) => {
      this.user = data;
      this.nome = this.user.name;
      this.imagem = this.user.photoProfile ? this.user.photoProfile : '';
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
      this.newCompany();
      await this.authService.hideLoading();
    } else {
      const getCompany = await (await this.authService.getData('company', 'usuario.key', usuario.key, 'nome'))
      .subscribe((data: any) => {
        this.company = data;
        this.loaded = true;
      });

      this.subscriptions.push(getCompany);


      await this.authService.hideLoading();
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.map(s => s.unsubscribe());
  }

  goTo(item: Empresa) {
    this.navController.navigateForward(`painel/minha-empresa/${item.key}`);

  }

  newCompany() {
    this.navController.navigateRoot(['painel/cadastrar-empresa']);
  }
}
