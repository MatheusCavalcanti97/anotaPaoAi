import { UpdateClientePage } from './../update-cliente/update-cliente.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaDeClientesPage } from './lista-de-clientes.page';

const routes: Routes = [
  {
    path: '',
    component: ListaDeClientesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: ListaDeClientesPage }])
  ],
  declarations: [ListaDeClientesPage, UpdateClientePage],
  entryComponents : [UpdateClientePage]
})
export class ListaDeClientesPageModule {}
