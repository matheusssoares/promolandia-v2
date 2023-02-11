import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Empresa } from 'src/app/models/empresa.model';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-confirmar-empresa',
  templateUrl: './confirmar-empresa.page.html',
  styleUrls: ['./confirmar-empresa.page.scss'],
})
export class ConfirmarEmpresaPage implements OnInit {
  public empresa: Empresa;
  private subscriptions: Subscription[] = [];
  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private navController: NavController
  ) { }

  ngOnInit() {
    this.empresa = JSON.parse(this.activatedRoute.snapshot.queryParams.empresa);
  }

  async onClick() {
    await this.authService.showLoading('Cadastrando empresa...');
    const validation = (await this.authService.isExists('company', 'cnpj', this.empresa.cnpj));
    if(!validation) {
      const result = await this.authService.createDb('company', this.empresa.key, this.empresa);
      if(result) {
        await this.authService.hideLoading();
        await this.authService.presentToast('Empresa cadastrada com sucesso!', 3000);
        this.navController.navigateRoot(['painel/dashboard']);
      } else {
        await this.authService.hideLoading();
        await this.authService.presentAlert('Opsss!', 'Algo deu errado.');
      }
    } else {
      await this.authService.hideLoading();
      await this.authService.presentAlert('Opsss!', 'Há uma empresa com o mesmo cnpj já cadastrada em nossa base.');
    }

  }

}
