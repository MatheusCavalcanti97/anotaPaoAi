import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-da-venda',
  templateUrl: './page-da-venda.page.html',
  styleUrls: ['./page-da-venda.page.scss'],
})
export class PageDaVendaPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }


  backToHome() {
    this.router.navigate(['./tabs/categorias-app']);
  }

}
