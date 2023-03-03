import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, ModalController } from '@ionic/angular';
import { EditarCategoriaComponent } from '../editar-categoria/editar-categoria.component';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss'],
})
export class ListCategoryComponent implements OnInit {
  @Input() model;

  constructor(
    public actionSheet: ActionSheetController,
    private modalCtrl: ModalController,
    private alertController: AlertController
  ) { }

  ngOnInit() {

  }

 async openAction(i) {
    const actionSheet = await this.actionSheet.create({
      header: `${i.nome}`,
      cssClass: 'font-color',
      buttons: [
        {
          text: 'Editar',
          handler: () => {
            this.openModal(i);

          }
        },
        {
          text: 'Excluir',
          handler: () => {
            this.presentAlert(i);
          }
        },
        {
          text: 'Cancelar',
          cssClass: 'cancelar',
          role: 'cancel',
          data: {
            action: 'cancelar',
          },
        },
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
  }

  async openModal(categoria) {
    const modal = await this.modalCtrl.create({
      component: EditarCategoriaComponent,
      initialBreakpoint: 0.90,
      componentProps: {
        data: categoria
      }

    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      console.log( `Hello, ${data}!`);
    }
  }

  async presentAlert(i) {
    const alert = await this.alertController.create({
      header: 'Atenção!',
      message: `Deseja excluir a categoria ${i.nome}?`,
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            console.log(i);
          }
        },
        {
          text: 'Não',
          role: 'cancel'
        }
      ],
    });

    await alert.present();
  }

}
