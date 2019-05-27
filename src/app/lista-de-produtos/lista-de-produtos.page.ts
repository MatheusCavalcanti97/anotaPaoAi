import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-de-produtos',
  templateUrl: './lista-de-produtos.page.html',
  styleUrls: ['./lista-de-produtos.page.scss'],
})
export class ListaDeProdutosPage implements OnInit {

  constructor(private router :  Router) { }

  ngOnInit() {
  }

    backToListas(){
    this.router.navigate(["/listas"]);
  }

}
