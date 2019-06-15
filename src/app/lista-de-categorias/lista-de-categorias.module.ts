import { UpdateCategoriaPage } from './../update-categoria/update-categoria.page';
import { NovaCategoriaPage } from './../nova-categoria/nova-categoria.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaDeCategoriasPage } from './lista-de-categorias.page';

const routes: Routes = [
  {
    path: '',
    component: ListaDeCategoriasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: ListaDeCategoriasPage }])
  ],
  declarations: [ListaDeCategoriasPage, UpdateCategoriaPage],
  entryComponents : [UpdateCategoriaPage]
})
export class ListaDeCategoriasPageModule { }
