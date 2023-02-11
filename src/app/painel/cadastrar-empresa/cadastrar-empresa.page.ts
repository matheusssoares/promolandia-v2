import { Component, OnDestroy, OnInit } from '@angular/core';
import { Empresa } from 'src/app/models/empresa.model';
import { SearchCnpjService } from 'src/app/providers/search-cnpj.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/providers/auth.service';
import { Usuario } from 'src/app/models/usuario.model';
import { Subscription } from 'rxjs';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastrar-empresa',
  templateUrl: './cadastrar-empresa.page.html',
  styleUrls: ['./cadastrar-empresa.page.scss'],
})
export class CadastrarEmpresaPage implements OnInit, OnDestroy {
  public form: FormGroup;
  private empresa: Empresa;
  private user: Usuario;
  private subscriptions: Subscription[] = [];
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private navController: NavController,
    private searchService: SearchCnpjService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      cnpj: ['', [Validators.required, Validators.minLength(18)]],
    });

    this.getData();
  }

  async getData() {
    const buscar = this.authService.getCurrentUser().subscribe((data) => {
      this.user = data;
    });

    this.subscriptions.push(buscar);
  }

  async submitForm() {
    await this.authService.showLoading('Buscando dados...');
    const form = this.form.value.cnpj.replace(/[^0-9]/g, '');

    try {
      const buscarDados = this.searchService.search(form);
      buscarDados.toPromise().then(async (data) => {
        if(data.status === 'ERROR') {
          await this.authService.hideLoading();
          await this.authService
          .presentAlert('Opsss!', 'Não encontramos essa empresa cadastrada na base da Receita Federal.');
        } else {
          this.montarEmpresa(data);
        }

      }).catch(async (err) => {
        console.log(err);
        await this.authService.hideLoading();
        await this.authService.presentAlert('Opsss!', 'Algo deu errado.');
      });
    } catch (error) {
      await this.authService.hideLoading();
      await this.authService.presentAlert('Opsss!', 'Algo deu errado.');
    }
  }

  async montarEmpresa(data) {
    this.empresa = {
      abertura: data.abertura,
      atividadePrincipal: {
        code: data.atividade_principal[0].code,
        text: data.atividade_principal[0].text
      },
      bairro: data.bairro,
      capitalSocial: data.capital_social,
      cep: data.cep,
      cnpj: data.cnpj,
      createIn: new Date(),
      email: data.email,
      fantasia: data.fantasia,
      key: this.authService.createId(),
      logradouro: data.logradouro,
      municipio: data.municipio,
      naturezaJuridica: data.natureza_juridica,
      nome: data.nome,
      numero: data.numero,
      porte: data.porte,
      situacao: data.situacao,
      telefone: data.telefone,
      tipo: data.tipo,
      uf: data.uf,
      updateIn: new Date(),
      usuario: {
        email: this.user.email,
        key: this.user.key,
        nomeCompleto: this.user.name
      }
    };

    this.navController.navigateForward(['painel/confirmar-empresa'], {
      queryParams: {
        empresa: JSON.stringify(this.empresa)
      }
    });
    await this.authService.hideLoading();
  }

  ngOnDestroy(): void {
    this.subscriptions.map(s => s.unsubscribe());
  }
}
