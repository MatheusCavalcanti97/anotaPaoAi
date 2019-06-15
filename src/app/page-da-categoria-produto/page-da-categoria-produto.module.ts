import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PageDaCategoriaProdutoPage } from './page-da-categoria-produto.page';

const routes: Routes = [
  {
    path: '',
    component: PageDaCategoriaProdutoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PageDaCategoriaProdutoPage]
})
export class PageDaCategoriaProdutoPageModule {}
