import { CadastrosPage } from './../cadastros/cadastros.page';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-cliente',
  templateUrl: './novo-cliente.page.html',
  styleUrls: ['./novo-cliente.page.scss'],
})
export class NovoClientePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToCadastros() {
    this.router.navigate(['/cadastros']);
  }

}
