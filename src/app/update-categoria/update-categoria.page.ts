import { DBService } from './../services/db.services';
import { CategoriaProduto } from './../model/CategoriaProduto';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-update-categoria',
  templateUrl: './update-categoria.page.html',
  styleUrls: ['./update-categoria.page.scss'],
})
export class UpdateCategoriaPage implements OnInit {

  editarCategoria: CategoriaProduto;
  novaCategoria: CategoriaProduto;
  
  constructor(public modalController: ModalController, private dbService: DBService) {
      this.novaCategoria = new CategoriaProduto();
  }

  ngOnInit() {
    if (this.editarCategoria) {
      this.novaCategoria = this.editarCategoria;
    }
  }

  save() {
    if (this.editarCategoria) {
      this.edicaoDeCategoria();
    }
  }

  private edicaoDeCategoria() {
    const updatingObject = { nomeCategoria: this.novaCategoria.nomeCategoria, descricaoCategoria: this.novaCategoria.descricaoCategoria};
    this.dbService.update('/categoriaProduto', this.novaCategoria.uid, updatingObject)
      .then(() => {
        this.modalController.dismiss(this.novaCategoria);
      }).catch(error => {
        console.log(error);
      });
  }

  voltarParaListaDeCategorias() {
    this.modalController.dismiss();
  }
}
