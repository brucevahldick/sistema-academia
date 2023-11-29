package com.web.backendsistemaacademia.repository.pedido;

import com.web.backendsistemaacademia.model.pedido.PedidoProduto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PedidoProdutoRepository extends JpaRepository<PedidoProduto, Long> {
}
