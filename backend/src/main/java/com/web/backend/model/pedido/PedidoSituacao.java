package com.web.backend.model.pedido;

public enum PedidoSituacao {
    AGUARDANDO_PAGAMENTO(1, "Aguardando Pagamento"),
    PAGO(2, "Pago"),
    CANCELADO(3, "Cancelado"),
    ENTREGUE(4, "Entregue");

    private final int id;
    private final String nome;

    PedidoSituacao(int id, String nome) {
        this.id = id;
        this.nome = nome;
    }
}
