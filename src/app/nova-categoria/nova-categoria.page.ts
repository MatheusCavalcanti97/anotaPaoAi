import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DBService } from './../services/db.services';
import { CategoriaProduto } from './../model/CategoriaProduto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-categoria',
  templateUrl: './nova-categoria.page.html',
  styleUrls: ['./nova-categoria.page.scss'],
})
export class NovaCategoriaPage implements OnInit {

  editeCategoria: CategoriaProduto;
  novaCategoria: CategoriaProduto;

  constructor(public modalController: ModalController, private router: Router, private dbService: DBService) {
    this.novaCategoria = new CategoriaProduto();
  }

  ngOnInit() {
    if (this.editeCategoria) {
      this.novaCategoria = this.editeCategoria;
    }
  }

  async insert() {
    this.dbService.insertInList<CategoriaProduto>('/categoriaProduto', this.novaCategoria);
    this.novaCategoria = new CategoriaProduto();
  }

  backToPageDaCategoria(){
    this.router.navigate(['/page-da-categoria-produto']);
  }


}