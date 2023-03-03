import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.scss'],
})
export class EditarCategoriaComponent implements OnInit {

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
      nome: [this.data.nome, [Validators.required]]
    });

    this.renderForm = true;

    setTimeout(() => {
      this.authService.hideLoading();
    }, 400);
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  async submitForm() {
    await this.authService.showLoading('Atualizando categoria...');
    this.form.value.nome = this.form.value.nome.toLowerCase().toUpperCase();

    if(this.form.value.nome === this.data.nome) {
      this.authService.presentToast('Não houve alteração...');
      this.authService.hideLoading();
      return;
    } else {
      const chaves =
      {
        keyCompany: this.data.keyCompany,
        nome: this.form.value.nome.toUpperCase()
      };

      const validation = await this.authService.validationData('category', chaves);
      if(validation) {
        this.authService.hideLoading();
        this.authService.presentAlert('Opsss!', 'Categoria existente... Tente outro nome.');
      } else {
        this.form.value.keyCompany = this.data.keyCompany;
        this.form.value.key = this.data.key;
        this.form.value.status = true;
        const createCategory = await this.authService.createDb('category', this.data.key, this.form.value);
        if(createCategory) {
          this.authService.hideLoading();
          this.authService.presentToast('Categoria atualizada com sucesso!');
          this.authService.updateDataSubject('update_category');
          this.cancel();
        }
      }
    }
  }

}
