import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-do-cliente',
  templateUrl: './page-do-cliente.page.html',
  styleUrls: ['./page-do-cliente.page.scss'],
})
export class PageDoClientePage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
 

  backToHome() {
    this.router.navigate(['./tabs/categorias-app']);
  }

  toGoNovoCliente(){
    this.router.navigate(['/novo-cliente']);
  }

  toGoListaDeClientes(){
    this.router.navigate(['/lista-de-clientes']);
  }
  

}
