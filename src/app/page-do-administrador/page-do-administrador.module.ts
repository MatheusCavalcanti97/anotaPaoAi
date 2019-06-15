import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PageDoAdministradorPage } from './page-do-administrador.page';

const routes: Routes = [
  {
    path: '',
    component: PageDoAdministradorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PageDoAdministradorPage]
})
export class PageDoAdministradorPageModule {}
