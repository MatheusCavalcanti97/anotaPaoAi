import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-de-clientes',
  templateUrl: './lista-de-clientes.page.html',
  styleUrls: ['./lista-de-clientes.page.scss'],
})
export class ListaDeClientesPage implements OnInit {

  constructor(private router :  Router) { }

  ngOnInit() {
  }

  backToListas(){
    this.router.navigate(["/listas"]);
  }

}
