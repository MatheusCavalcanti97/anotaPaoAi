import { HomePage } from './../home/home.page';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ListaDeCategoriasPage } from './../lista-de-categorias/lista-de-categorias.page';
import { ListaDeClientesPage } from './../lista-de-clientes/lista-de-clientes.page';
import { ListaDeProdutosPage } from './../lista-de-produtos/lista-de-produtos.page';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.page.html',
  styleUrls: ['./listas.page.scss'],
})
export class ListasPage implements OnInit {
 
  constructor(private router :  Router) { }

  ngOnInit() {
  }

  backToHome(){
    this.router.navigate(['/tabs/home']);
  }

  toGoListaDecategorias(){
    this.router.navigate(['/lista-de-categorias']);
  }

  toGoListaDeClientes(){
    this.router.navigate(['/lista-de-clientes']);
  }

  toGoListaDeProdutos(){
    this.router.navigate(['/lista-de-produtos']);
  }

}
