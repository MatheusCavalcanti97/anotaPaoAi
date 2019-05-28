import { CategoriaProduto } from './../model/CategoriaProduto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DBService } from '../services/db.services';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-lista-de-categorias',
  templateUrl: './lista-de-categorias.page.html',
  styleUrls: ['./lista-de-categorias.page.scss'],
})
export class ListaDeCategoriasPage implements OnInit {

  listaDeCategorias: CategoriaProduto[];
  loading: boolean;


  constructor(private router: Router,
    private dbService: DBService,
    public alertController: AlertController) {
    this.init();
  }

  ngOnInit() {
  }

  private async init() {
    this.loading = true;
    await this.loadListaDeCategorias();
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

  async deleteMensagem(categoria: CategoriaProduto) {
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
            this.remove(categoria);
          }
        }
      ]
    });
    await alert.present();
  }

  remove(categoria:CategoriaProduto) {
    this.dbService.remove('/categoriaProduto', categoria.uid)
    .then((resultado) =>{
      this.loadListaDeCategorias();
    })
  }

  backToListas() {
    this.router.navigate(["/listas"]);
  }

}
