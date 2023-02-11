import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RoutesService } from 'src/app/providers/routes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.page.html',
  styleUrls: ['./criar-conta.page.scss'],
})
export class CriarContaPage implements OnInit {
  public form: FormGroup;
  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private routes: RoutesService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      aceitarTermo: [null, Validators.requiredTrue]
    });
  }
  goBack() {
    this.navCtrl.back();
  }

  goTo(page: string) {
    this.routes.goTo(page);
  }

  async submitForm() {
    await this.authService.showLoading('Criando conta...');
    const submit = await this.authService.createAccount(this.form.value);
    if(submit) {
      // eslint-disable-next-line no-debugger
      this.navCtrl.navigateRoot(['painel/dashboard']);
      this.authService.hideLoading();
    }

  }

}
