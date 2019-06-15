import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-do-administrador',
  templateUrl: './page-do-administrador.page.html',
  styleUrls: ['./page-do-administrador.page.scss'],
})
export class PageDoAdministradorPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  

  backToHome() {
    this.router.navigate(['./tabs/categorias-app']);
  }

}
