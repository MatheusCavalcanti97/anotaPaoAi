import { LoginPage } from './../login/login.page';
import { LoginPageModule } from './../login/login.module';
import { ConfiguracoesPageModule } from './../configuracoes/configuracoes.module';
import { CadastrosPageModule } from './../cadastros/cadastros.module';
import { ListasPageModule } from './../listas/listas.module';
import { HomePageModule } from './../home/home.module';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'cadastros',
        children: [
          {
            path: '',
            loadChildren: '../cadastros/cadastros.module#CadastrosPageModule'
          }
        ]
      },
      {
        path: 'listas',
        children: [
          {
            path: '',
            loadChildren: '../listas/listas.module#ListasPageModule'
          }
        ]
      },
      {
        path: 'configuracoes',
        children: [
          {
            path: '',
            loadChildren: '../configuracoes/configuracoes.module#ConfiguracoesPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
