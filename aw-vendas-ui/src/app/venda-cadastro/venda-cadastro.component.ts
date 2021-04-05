import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Cliente } from '../model/cliente';
import { Item } from '../model/item';
import { Produto } from '../model/produto';
import { Venda } from '../model/venda';
import { FormGroup, FormControl } from '@angular/forms';

import { VendasService } from '../vendas/vendas.service';

@Component({
  selector: 'app-venda-cadastro',
  templateUrl: './venda-cadastro.component.html',
  styleUrls: ['./venda-cadastro.component.css']
  
})

export class VendaCadastroComponent implements OnInit {
  venda = new Venda();
  item: Item = new Item();
  produto = new Produto;
  clientes: Array<Cliente> = [];
  produtos: Array<Produto> = [];
  vendas: Array<any> = [];
  vendaFinal = new Venda();
  formProduto = new FormGroup({
    id: new FormControl(''),
    nome: new FormControl(''),
    valor: new FormControl(''),
  });
  @Output() vendaSalva = new EventEmitter();

  constructor(private vendaService: VendasService) { }

  ngOnInit(): void {
    this.vendaService.listarClientes().subscribe(response => this.clientes = response);

    this.vendaService.listarProdutos().subscribe(response => this.produtos = response);

    this.vendaService.listar().subscribe(response => this.vendas = response);
  }

  adicionarProduto() {
    let {id, nome, valor} = this.formProduto.value;
    
    this.produto.nome = nome;
    this.produto.valor = valor;

    this.vendaService.adicionarProduto(this.produto).subscribe(response => {
    this.produtos.push(response);
    this.produto = new Produto;
    });
  }

  incluirItem() {
    if (this.item.produto?.valor && this.item.quantidade) {
      this.item.total = (this.item.produto.valor * this.item.quantidade);
    }

    if (!this.venda.itens){
      this.venda.itens = [];
    }

    this.venda.itens?.push(this.item);

    this.item = {};

    if (this.venda.itens) {
      this.calcularTotal(this.venda.itens);
    }
  }

  calcularTotal (itens: any[]) {
    const totalItens = 
    itens.map((i: { produto: { valor: number; }; quantidade: number; }) => (i.produto.valor * i.quantidade))
    .reduce((total: any, v: any) => total + v, 0);

    this.venda.total = totalItens + this.venda.frete;
  }

  adicionar() {
    this.vendaService.adicionar(this.venda).subscribe(response => {
    this.vendas.push(response);
    this.venda = new Venda;
    this.vendaSalva.emit(response);
    });
  }
}
