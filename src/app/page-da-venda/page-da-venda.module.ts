import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PageDaVendaPage } from './page-da-venda.page';

const routes: Routes = [
  {
    path: '',
    component: PageDaVendaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PageDaVendaPage]
})
export class PageDaVendaPageModule {}
