package net.javaguides.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import net.javaguides.springboot.model.Produto;
import net.javaguides.springboot.repository.ProdutoRepository;

public class ProdutoServiceImpl implements ProdutoServices{

	@Autowired
	private ProdutoRepository produtoRepository;
	
	@Override
	public Produto saveProduto(Produto produto) {
		return produtoRepository.save(produto);
	}

	
	public List<Produto> getAllProdutos() {
		return produtoRepository.findAll();
	}
	
}
