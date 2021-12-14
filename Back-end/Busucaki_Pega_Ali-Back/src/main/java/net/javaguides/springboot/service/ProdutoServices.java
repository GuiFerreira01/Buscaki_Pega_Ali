package net.javaguides.springboot.service;

import java.util.List;

import net.javaguides.springboot.model.Produto;

public interface ProdutoServices {
	
	public Produto saveProduto(Produto produto);
	
	public List<Produto> getAllProdutos();
}
