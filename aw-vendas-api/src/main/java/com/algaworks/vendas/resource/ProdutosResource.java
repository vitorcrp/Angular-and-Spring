package com.algaworks.vendas.resource;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.algaworks.vendas.model.Produto;
import com.algaworks.vendas.repository.Produtos;
import com.algaworks.vendas.service.ProdutoService;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "produtos")
public class ProdutosResource {
	
	@Autowired
	private Produtos produtos;
	
	@Autowired
	private ProdutoService produtoService;
	
	@GetMapping
	public List<Produto> listar() {
		return produtos.findAll();
	}
	
	@PostMapping
	public Produto adicionar (@RequestBody @Valid Produto produto) {
		System.out.println(produto);
		return produtoService.adicionar(produto);
	}
	
	@RequestMapping(value="/{id}",method = RequestMethod.PUT)
	public ResponseEntity<Produto> update(@PathVariable Long id, @RequestBody Produto produto) {
		produto = produtoService.atualizar(id, produto);
		return ResponseEntity.ok().body(produto);
	}

	@RequestMapping(value="/{id}",method = RequestMethod.DELETE)
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		produtoService.deletar(id);
		return ResponseEntity.ok().build();
	}

}
