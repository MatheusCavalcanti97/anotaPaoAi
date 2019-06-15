import { DBService } from './../services/db.services';
import { CategoriaProduto } from './../model/CategoriaProduto';
import { Produto } from './../model/Produto';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.page.html',
  styleUrls: ['./novo-produto.page.scss'],
})
export class NovoProdutoPage implements OnInit {

  editarProduto : Produto;
  novoProduto: Produto;
  listaDeCategoria: CategoriaProduto[];


  constructor(private router: Router, private dbService: DBService) {
    this.novoProduto = new Produto();
    this.loadListaDeCategoria();
  }
 
  ngOnInit() {
    if(this.editarProduto){
      this.novoProduto = this.editarProduto;
    }
  }

  private async loadListaDeCategoria() {
    this.listaDeCategoria = await this.dbService.listWithUIDs<CategoriaProduto>('/categoriaProduto');
  }

  async insert(){
    this.dbService.insertInList<Produto>('/produto', this.novoProduto);
    this.novoProduto = new Produto();
  }
 
  backToPageDoProduto() {
    this.router.navigate(['/page-do-produto']);
  } 

}
