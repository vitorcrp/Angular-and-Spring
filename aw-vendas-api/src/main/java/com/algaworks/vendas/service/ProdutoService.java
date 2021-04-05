package com.algaworks.vendas.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.algaworks.vendas.model.Produto;
import com.algaworks.vendas.repository.Produtos;

@Service
public class ProdutoService {
	
	@Autowired
	private Produtos produtos;
	
	public Produto findById(long id) {
		Optional<Produto> produto = produtos.findById(id);
		return produto.orElseThrow();
	}
	
	public Produto adicionar(Produto produto) {
		produto.setNome(produto.getNome());
		produto.setValor(produto.getValor());
		return produtos.save(produto);
	}

	public Produto atualizar(Long id, Produto produtoAtt) {
		Produto produtoAntigo = findById(id);
		produtoAntigo.setNome(produtoAtt.getNome());
		produtoAntigo.setValor(produtoAtt.getValor());
		return produtos.save(produtoAntigo);
	}


	public void deletar(Long id) {
		Produto produto = findById(id);
		produtos.delete(produto);
	}

	
	
	
}
