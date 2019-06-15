import { CategoriaProduto } from './../model/CategoriaProduto';
import { DBService } from './../services/db.services';
import { ModalController } from '@ionic/angular';
import { Produto } from './../model/Produto';
import { Component, OnInit } from '@angular/core';
 
@Component({ 
  selector: 'app-update-produto',
  templateUrl: './update-produto.page.html',
  styleUrls: ['./update-produto.page.scss'],
})
export class UpdateProdutoPage implements OnInit {

  listaDeCategoria : CategoriaProduto[];
  editarProduto: Produto;
  novoProduto: Produto;

  constructor(public modalController: ModalController, private dbService: DBService) {
    this.novoProduto = new Produto();
    this.loadListaDeCategorias();
  }

  ngOnInit() {
      if(this.editarProduto){
        this.novoProduto = this.editarProduto;
      }
  }

  private async loadListaDeCategorias() {
    this. listaDeCategoria = await this.dbService.listWithUIDs<CategoriaProduto>('/categoriaProduto');
}

  save(){
    if(this.editarProduto){
      this.edicaoDeProduto();
    }
  }

  private edicaoDeProduto() {
    const updatingObject = { nomeProduto : this.novoProduto.nomeProduto, precoProduto : this.novoProduto.precoProduto, uidCP : this.novoProduto.uidCP };
    this.dbService.update('/produto', this.novoProduto.uid, updatingObject)
      .then(() => {
        this.modalController.dismiss(this.novoProduto);
      }).catch(error => {
        console.log(error);
      });
  }

  voltarParaListaDeProdutos() {
    this.modalController.dismiss();
  }

}
