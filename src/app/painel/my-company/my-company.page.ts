import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/auth.service';
import { RoutesService } from 'src/app/providers/routes.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Empresa } from 'src/app/models/empresa.model';
import { ModalController } from '@ionic/angular';
import { AdicionarCategoriaComponent } from 'src/app/components/adicionar-categoria/adicionar-categoria.component';
@Component({
  selector: 'app-my-company',
  templateUrl: './my-company.page.html',
  styleUrls: ['./my-company.page.scss'],
})
export class MyCompanyPage implements OnInit {
  // eslint-disable-next-line @typescript-eslint/member-ordering
  public imagem = '';
  // eslint-disable-next-line @typescript-eslint/member-ordering
  public nome = '';
  public company;
  private subscriptions: Subscription[] = [];
  // eslint-disable-next-line @typescript-eslint/member-ordering
  keyEmpresa: string;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  categorias = [];
  // eslint-disable-next-line @typescript-eslint/member-ordering
  produtos = [];

  constructor(
    private authService: AuthService,
    private router: ActivatedRoute,
    private modalCtrl: ModalController
  ) { }

  async ngOnInit() {
    this.getCategory();
    this.getStatusSubject();
    await this.authService.showLoading('Aguarde...');
    this.keyEmpresa = this.router.snapshot.paramMap.get('key');

   const buscar =  (await this.authService.getData('company', 'key', this.keyEmpresa, 'nome'))
   .subscribe(data => {
    this.company = data[0];
    this.imagem = this.company.logo ? this.company.logo : '../../../assets/img/empresa.jpg';
    this.nome = this.company.fantasia;
   });

   await this.authService.hideLoading();
}

  getStatusSubject() {
   const sub = this.authService.getDataSubject().subscribe(data => {
      if(data === 'update_category') {
        this.getCategory();
      }
    });

    this.subscriptions.push(sub);
  }

  async getCategory() {
    const results = await (await this.authService.getDataAll('category', ['status', '==', true], ['keyCompany', '==', this.keyEmpresa]))
    .subscribe(data => {
      this.categorias = data;
    });

    this.subscriptions.push(results);
  }

  addProduct() {

  }
  async addCategory() {
    const modal = await this.modalCtrl.create({
      component: AdicionarCategoriaComponent,
      initialBreakpoint: 0.90,
      componentProps: {
        data: this.keyEmpresa
      }

    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      console.log( `Hello, ${data}!`);
    }
  }
}
