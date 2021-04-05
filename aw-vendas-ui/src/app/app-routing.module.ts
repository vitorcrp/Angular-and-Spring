import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';
import { VendaCadastroComponent } from './venda-cadastro/venda-cadastro.component';
import { VendasListagemComponent } from './vendas-listagem/vendas-listagem.component';

const routes: Routes = [
//Home
{
  path: 'home',
  component: HomeComponent
},
//Cadastro de produtos
{
  path: 'produto-cadastro',
  component: ProdutoCadastroComponent
},
//Cadastro de Vendas
{
  path: 'venda-cadastro',
  component: VendaCadastroComponent
}  , 
//Listagem de Vendas
{
  path: 'venda-listagem',
  component: VendasListagemComponent
}   

];

export const RoutingModule = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
