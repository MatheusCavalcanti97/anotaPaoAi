import { Produto } from './../model/Produto';
import { CategoriaProduto } from './../model/CategoriaProduto';
import { UpdateProdutoPage } from './../update-produto/update-produto.page';
import { DBService } from './../services/db.services';
import { ToastController, ModalController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
 
@Component({
  selector: 'app-lista-de-produtos',
  templateUrl: './lista-de-produtos.page.html',
  styleUrls: ['./lista-de-produtos.page.scss'],
})
export class ListaDeProdutosPage implements OnInit {

  listaDeCategoria: CategoriaProduto[];
  listaDeProdutos: Produto[];

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

    this.dbService.listAndWatch('/categoriaProduto').subscribe(data => this.loadListaCategoriaProdutos());
    this.dbService.listAndWatch('/produto').subscribe(data => this.loadListaProdutos());

  }

  private async loadListaCategoriaProdutos() {
    this.listaDeCategoria = await this.dbService.listWithUIDs<CategoriaProduto>('/categoriaProduto');
  }

  private async loadListaProdutos() {
    this.dbService.listWithUIDs<Produto>('/produto')
      .then(listaProdutos => {
        this.listaDeProdutos = listaProdutos;
        this.associacaoProduto_CategoriaProduto();
        this.loading = false;
      }).catch(error => {
        console.log(error);
      });
  }

  private associacaoProduto_CategoriaProduto() {
    this.listaDeProdutos.forEach(produto => {
      const produtoEcategoria = this.listaDeCategoria.filter(a => a.uid == produto.uidCP)[0];

      produto['categoriaTexto'] = produtoEcategoria.nomeCategoria + '/' + produtoEcategoria.descricaoCategoria;
    });
  }

  async deleteMensagem(produto: Produto) {
    const alert = await this.alertController.create({
      header: 'Atenção',
      message: 'Deseja Deletar este Produto? ',
      buttons: [
        {
          text: 'Cancelar',
          cssClass: 'secondary'
        },
        {
          text: 'Confirmar',
          handler: () => {
            this.remove(produto);
          }
        }
      ]
    });
    await alert.present();
  }

  async edicaoDeProduto(produto: Produto) {
    const modal = await this.modalController.create({
      component: UpdateProdutoPage,
      componentProps: {
        editarProduto: produto
      }
    });

    modal.onDidDismiss()
      .then(result => {
        if (result.data) {
          this.confirmarEdicaoProduto();
        }
      });

    return await modal.present();
  }

  private confirmarEdicaoProduto() {
    this.presentToast('Categoria Editada com sucesso');
    this.loadListaProdutos();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  remove(produto: Produto) {
    this.dbService.remove('/produto', produto.uid)
      .then((resultado) => {
        this.loadListaProdutos();
      })
  }

  backToPageDoProduto() {
    this.router.navigate(['/page-do-produto']);
  }

}
