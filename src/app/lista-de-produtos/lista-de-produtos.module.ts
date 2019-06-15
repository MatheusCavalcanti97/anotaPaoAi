import { UpdateProdutoPage } from './../update-produto/update-produto.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaDeProdutosPage } from './lista-de-produtos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaDeProdutosPage
  }
];

@NgModule({ 
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: ListaDeProdutosPage }])
  ],
  declarations: [ListaDeProdutosPage, UpdateProdutoPage],
  entryComponents : [UpdateProdutoPage]
})
export class ListaDeProdutosPageModule {}
