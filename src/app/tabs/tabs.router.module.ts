import { CategoriasAppPageModule } from './../categorias-app/categorias-app.module';
import { LoginPage } from './../login/login.page';
import { LoginPageModule } from './../login/login.module';
import { ConfiguracoesPageModule } from './../configuracoes/configuracoes.module';
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
        path: 'categorias-app',
        children: [
          {
            path: '',
            loadChildren: '../categorias-app/categorias-app.module#CategoriasAppPageModule'
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
