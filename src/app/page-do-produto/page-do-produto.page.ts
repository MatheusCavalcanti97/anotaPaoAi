import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-do-produto',
  templateUrl: './page-do-produto.page.html',
  styleUrls: ['./page-do-produto.page.scss'],
})
export class PageDoProdutoPage implements OnInit {


  constructor(private router: Router) {

  }
 
  ngOnInit() {
  }
 

  backToHome() {
    this.router.navigate(['./tabs/categorias-app']);
  }

  toGoNovoProduto() {
    this.router.navigate(['/novo-produto']);
  }

  toGoListaDeProdutos() {
    this.router.navigate(['/lista-de-produtos']);
  }

}
