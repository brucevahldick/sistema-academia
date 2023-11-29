package com.web.backend.repository.pedido;

import com.web.backend.model.pedido.PedidoPagamento;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PedidoPagamentoRepository extends JpaRepository<PedidoPagamento, Long> {
}
