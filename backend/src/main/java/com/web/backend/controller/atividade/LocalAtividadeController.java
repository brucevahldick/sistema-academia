package com.web.backendsistemaacademia.controller.atividade;

import com.web.backendsistemaacademia.repository.atividade.LocalAtividadeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class LocalAtividadeController {
    @Autowired
    private LocalAtividadeRepository localAtividadeRepository;
}
