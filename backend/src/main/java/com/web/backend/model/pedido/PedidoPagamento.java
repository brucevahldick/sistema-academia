package com.web.backend.model.pedido;

import com.web.backend.model.Pagamento;
import jakarta.persistence.*;

@Entity
@Table(name = "pedido_pagamento")
public class PedidoPagamento extends Pagamento {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    private Pedido pedido;

    public Pedido getPedido() {
        return pedido;
    }

    public void setPedido(Pedido pedido) {
        this.pedido = pedido;
    }
}
