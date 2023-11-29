package com.web.backendsistemaacademia.controller.pessoa;

import com.web.backendsistemaacademia.repository.pessoa.PessoaEnderecoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class PessoaEnderecoController {
    @Autowired
    private PessoaEnderecoRepository pessoaEnderecoRepository;
}
