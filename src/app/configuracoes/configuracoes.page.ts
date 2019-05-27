import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HomePage } from './../home/home.page';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.page.html',
  styleUrls: ['./configuracoes.page.scss'],
})
export class ConfiguracoesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHomeConfigurations() {
    this.router.navigate(['/tabs/home']);
  }
}
