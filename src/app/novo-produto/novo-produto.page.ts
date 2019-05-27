import { CadastrosPage } from './../cadastros/cadastros.page';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.page.html',
  styleUrls: ['./novo-produto.page.scss'],
})
export class NovoProdutoPage implements OnInit {

  constructor(private router :  Router) { }

  ngOnInit() {
  }

  backToCadastros(){
    this.router.navigate(['/cadastros']);
  }

}
