import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-adicionar-categoria',
  templateUrl: './adicionar-categoria.component.html',
  styleUrls: ['./adicionar-categoria.component.scss'],
})
export class AdicionarCategoriaComponent implements OnInit {
  public form: FormGroup;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  renderForm = false;
  keyEmpresa: string;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @Input() data: any;
  constructor(
    private authService: AuthService,
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder
  ) { }

  async ngOnInit() {
    await this.authService.showLoading('Aguarde...');
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required]]
    });

    this.renderForm = true;

    setTimeout(() => {
      this.authService.hideLoading();
    }, 1000);

  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss('this.name', 'confirm');
  }

  async submitForm() {
    await this.authService.showLoading('Cadastrando categoria...');
    this.form.value.nome = this.form.value.nome.toLowerCase().toUpperCase();

    const chaves =
      {
        keyCompany: this.data,
        nome: this.form.value.nome.toUpperCase()
      };

    const validation = await this.authService.validationData('category', chaves);
    if(validation) {
      this.authService.hideLoading();
      this.authService.presentAlert('Opsss!', 'Categoria existente... Tente outro nome.');
    } else {
      this.form.value.keyCompany = this.data;
      const key = this.authService.createId();
      this.form.value.key = key;
      this.form.value.status = true;
      const createCategory = await this.authService.createDb('category', key, this.form.value);
      if(createCategory) {
        this.authService.hideLoading();
        this.authService.presentToast('Categoria criada com sucesso!');
        this.authService.updateDataSubject('update_category');
        this.cancel();
      }
    }



  }

}
