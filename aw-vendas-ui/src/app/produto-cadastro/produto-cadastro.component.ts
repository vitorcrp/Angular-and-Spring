import { Component, OnInit} from '@angular/core';
import { Produto } from '../model/produto';
import { FormGroup, FormControl } from '@angular/forms';
import { VendasService } from '../vendas/vendas.service';

@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.css']
})
export class ProdutoCadastroComponent implements OnInit {

  produto = new Produto;
  produtos: Array<Produto> = [];
  formProduto = new FormGroup({
    nome: new FormControl(''),
    valor: new FormControl(''),
  });

  constructor(private vendaService: VendasService) { }

  ngOnInit(): void {
    this.vendaService.listarProdutos().subscribe(response => this.produtos = response);
  }

  adicionarProduto() {
    let {nome, valor} = this.formProduto.value;
    
    this.produto.nome = nome;
    this.produto.valor = valor;

    this.vendaService.adicionarProduto(this.produto).subscribe(response => {
    this.produtos.push(response);
    this.produto = new Produto;
    });
  }
}
