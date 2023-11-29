package com.web.backend.controller.pessoa;

import com.web.backend.repository.pessoa.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class PessoaController {
    @Autowired
    private PessoaRepository pessoaRepository;
}
