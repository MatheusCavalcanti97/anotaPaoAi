import { UpdateCategoriaPage } from './../update-categoria/update-categoria.page';
import { CategoriaProduto } from './../model/CategoriaProduto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DBService } from '../services/db.services';
import { AlertController } from '@ionic/angular';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-lista-de-categorias',
  templateUrl: './lista-de-categorias.page.html',
  styleUrls: ['./lista-de-categorias.page.scss'],
})
export class ListaDeCategoriasPage{

  listaDeCategorias: CategoriaProduto[];
  loading: boolean;

  constructor(public modalController: ModalController, public toastController: ToastController, private router: Router,
    private dbService: DBService,
    public alertController: AlertController) {
    this.init();
  }

  ngOnInit() {
  }

  private async init() {
    this.loading = true;
    this.dbService.listAndWatch('/categoriaProduto')
      .subscribe(data => this.loadListaDeCategorias());
  }

  private async loadListaDeCategorias() {
    this.dbService.listWithUIDs<CategoriaProduto>('/categoriaProduto')
      .then(listaDeCategorias => {
        this.listaDeCategorias = listaDeCategorias;
        this.loading = false;
      }).catch(error => {
        console.log(error);
      });
  }

  async deleteMensagem(categoriaProduto: CategoriaProduto) {
    const alert = await this.alertController.create({
      header: 'Atenção',
      message: 'Deseja Deletar esta Categoria? ',
      buttons: [
        {
          text: 'Cancelar',
          cssClass: 'secondary'
        },
        {
          text: 'Confirmar',
          handler: () => {
            this.remove(categoriaProduto);
          }
        }
      ]
    });
    await alert.present();
  }

  async edicaoDeCategoria(categoriaProduto: CategoriaProduto) {
    const modal = await this.modalController.create({
      component: UpdateCategoriaPage,
      componentProps: {
        editarCategoria: categoriaProduto
      }
    });

    modal.onDidDismiss()
      .then(result => {
        if (result.data) {
          this.confirmarEdicaoCategoria();
        }
      });

    return await modal.present();
  }

  private confirmarEdicaoCategoria() {
    this.presentToast('Categoria Editada com sucesso');
    this.loadListaDeCategorias();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  remove(categoriaProduto: CategoriaProduto) {
    this.dbService.remove('/categoriaProduto', categoriaProduto.uid)
      .then((resultado) => {
        this.loadListaDeCategorias();
      })
  }

  backToPageDaCategoria() {
    this.router.navigate(['/page-da-categoria-produto']);
  }

}
