package com.web.backendsistemaacademia.repository.pedido;

import com.web.backendsistemaacademia.model.pedido.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PedidoRepository extends JpaRepository<Pedido, Long> {
}
