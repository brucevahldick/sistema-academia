package com.web.backendsistemaacademia.controller.pedido;

import com.web.backendsistemaacademia.repository.pedido.PedidoProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class PedidoProdutoController {
    @Autowired
    private PedidoProdutoRepository pedidoProdutoRepository;
}