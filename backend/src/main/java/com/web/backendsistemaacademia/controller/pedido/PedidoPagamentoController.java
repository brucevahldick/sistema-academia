package com.web.backendsistemaacademia.controller.pedido;

import com.web.backendsistemaacademia.repository.pedido.PedidoPagamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class PedidoPagamentoController {
    @Autowired
    private PedidoPagamentoRepository pedidoPagamentoRepository;
}
