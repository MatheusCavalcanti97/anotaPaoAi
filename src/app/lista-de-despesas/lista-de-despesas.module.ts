import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaDeDespesasPage } from './lista-de-despesas.page';

const routes: Routes = [
  {
    path: '',
    component: ListaDeDespesasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaDeDespesasPage]
})
export class ListaDeDespesasPageModule {}
