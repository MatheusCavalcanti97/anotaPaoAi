import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-page-da-categoria-produto',
  templateUrl: './page-da-categoria-produto.page.html',
  styleUrls: ['./page-da-categoria-produto.page.scss'],
})
export class PageDaCategoriaProdutoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toGoListaDeCategorias(){
    this.router.navigate(['/lista-de-categorias']);
  }

  toGoNovaCategoria(){
    this.router.navigate(['/nova-categoria']);
  }

  backToPageCategoriaDoApp(){
    this.router.navigate(['/categorias-app']);
  }

}
