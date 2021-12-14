package net.javaguides.springboot.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long>{ 

}
