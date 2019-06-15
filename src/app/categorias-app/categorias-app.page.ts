import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias-app',
  templateUrl: './categorias-app.page.html',
  styleUrls: ['./categorias-app.page.scss'],
})
export class CategoriasAppPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  toGoPageDoAdministrador(){
    this.router.navigate(['/page-do-administrador']);
  }

  toGoPageDoCliente(){
    this.router.navigate(['/page-do-cliente']);
  }

  toGoPageDoProduto(){
    this.router.navigate(['/page-do-produto']);
  }

  toGoPageDaCategoriaDoProduto(){
    this.router.navigate(['/page-da-categoria-produto']);
  }

  toGoPageDaVenda(){
    this.router.navigate(['/page-da-venda']);
  }

  backToHome(){
    this.router.navigate(['./tabs/home']);
  }

}
