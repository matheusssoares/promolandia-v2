import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/providers/auth.service';
import { RoutesService } from 'src/app/providers/routes.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {
  public form: FormGroup;
  private subscriptions: Subscription[] = [];
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private routes: RoutesService,
    private navCtrl: NavController,
  ) { }

  async ionViewDidEnter() {
   const result = await (await this.authService.isLogged()).toPromise().then((data) => data);
   if(result) {
    this.navCtrl.navigateRoot(['painel/dashboard']);
   }
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  goTo(page: string) {
    this.routes.goTo(page);
  }

  async submitForm() {
    await this.authService.showLoading('Criando conta...');
    const submit = await this.authService.login(this.form.value);
    if(submit) {
      this.navCtrl.navigateRoot(['painel/dashboard']);
      this.authService.hideLoading();
      await this.authService.presentToast('Login efetuado com sucesso!', 3000);
    }

  }

  ngOnDestroy(): void {
    this.subscriptions.map(s => s.unsubscribe());
  }

}
