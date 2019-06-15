import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'configuracoes', loadChildren: './configuracoes/configuracoes.module#ConfiguracoesPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'novo-cliente', loadChildren: './novo-cliente/novo-cliente.module#NovoClientePageModule' },
  { path: 'novo-produto', loadChildren: './novo-produto/novo-produto.module#NovoProdutoPageModule' },
  { path: 'nova-categoria', loadChildren: './nova-categoria/nova-categoria.module#NovaCategoriaPageModule' },
  { path: 'nova-despesa', loadChildren: './nova-despesa/nova-despesa.module#NovaDespesaPageModule' },
  { path: 'cliente', loadChildren: './cliente/cliente.module#ClientePageModule' },
  { path: 'categoria', loadChildren: './categoria/categoria.module#CategoriaPageModule' },
  { path: 'lista-de-categorias', loadChildren: './lista-de-categorias/lista-de-categorias.module#ListaDeCategoriasPageModule' },
  { path: 'lista-de-produtos', loadChildren: './lista-de-produtos/lista-de-produtos.module#ListaDeProdutosPageModule' },
  { path: 'lista-de-clientes', loadChildren: './lista-de-clientes/lista-de-clientes.module#ListaDeClientesPageModule' },
  { path: 'despesas', loadChildren: './despesas/despesas.module#DespesasPageModule' },
  { path: 'lista-de-despesas', loadChildren: './lista-de-despesas/lista-de-despesas.module#ListaDeDespesasPageModule' },
  { path: 'update-categoria', loadChildren: './update-categoria/update-categoria.module#UpdateCategoriaPageModule' },
  { path: 'categorias-app', loadChildren: './categorias-app/categorias-app.module#CategoriasAppPageModule' },
  { path: 'page-do-cliente', loadChildren: './page-do-cliente/page-do-cliente.module#PageDoClientePageModule' },
  { path: 'page-do-administrador', loadChildren: './page-do-administrador/page-do-administrador.module#PageDoAdministradorPageModule' },
  { path: 'page-do-produto', loadChildren: './page-do-produto/page-do-produto.module#PageDoProdutoPageModule' },
  { path: 'page-da-categoria-produto', loadChildren: './page-da-categoria-produto/page-da-categoria-produto.module#PageDaCategoriaProdutoPageModule' },
  { path: 'page-da-venda', loadChildren: './page-da-venda/page-da-venda.module#PageDaVendaPageModule' },
  { path: 'update-produto', loadChildren: './update-produto/update-produto.module#UpdateProdutoPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
