package com.web.backendsistemaacademia.repository;

import com.web.backendsistemaacademia.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
}
