import { Router } from '@angular/router';
import { DBService } from './../services/db.services';
import { CategoriaProduto } from './../model/CategoriaProduto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-categoria',
  templateUrl: './nova-categoria.page.html',
  styleUrls: ['./nova-categoria.page.scss'],
})
export class NovaCategoriaPage implements OnInit {

  editeCategoria: CategoriaProduto;
  novaCategoria: CategoriaProduto;

  constructor(private router: Router, private dbService: DBService) {
    this.novaCategoria = new CategoriaProduto();
  }

  ngOnInit() {
  }

  async insert() {
    this.dbService.insertInList<CategoriaProduto>('/categoriaProduto', this.novaCategoria);
    this.novaCategoria = new CategoriaProduto();
  }

  backToCadastros() {
    this.router.navigate(['/cadastros']);
  }

  toGoNovoNewProduto() {
    this.router.navigate(['/novo-produto']);
  }

}