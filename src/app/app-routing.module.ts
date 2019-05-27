import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'listas', loadChildren: './listas/listas.module#ListasPageModule' },
  { path: 'cadastros', loadChildren: './cadastros/cadastros.module#CadastrosPageModule' },
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
  { path: 'lista-de-despesas', loadChildren: './lista-de-despesas/lista-de-despesas.module#ListaDeDespesasPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
