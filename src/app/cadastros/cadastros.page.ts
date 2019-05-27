import { NovaDespesaPage } from './../nova-despesa/nova-despesa.page';
import { NovoProdutoPage } from './../novo-produto/novo-produto.page';
import { NovaCategoriaPage } from './../nova-categoria/nova-categoria.page';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.page.html',
  styleUrls: ['./cadastros.page.scss'],
})
export class CadastrosPage implements OnInit {

  constructor(private router :  Router) { }

  ngOnInit() {
  }

  backToHome(){
    this.router.navigate(['/tabs/home']);
  }

  goToNovoCliente(){
    this.router.navigate(['/novo-cliente']);
  }

  goToNovaCategoria(){
    this.router.navigate(['/nova-categoria']);
  }

  goToNovoProduto(){
    this.router.navigate(['/novo-produto']);
  }

  goToNovaDespesa(){
    this.router.navigate(['/nova-despesa']);
  }

}
