package com.web.backendsistemaacademia.controller.pessoa;

import com.web.backendsistemaacademia.repository.pessoa.PessoaContatoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class PessoaContatoController {
    @Autowired
    private PessoaContatoRepository pessoaContatoRepository;
}
