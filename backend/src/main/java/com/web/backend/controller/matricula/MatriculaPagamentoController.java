package com.web.backend.controller.matricula;

import com.web.backend.repository.matricula.MatriculaPagamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class MatriculaPagamentoController {
    @Autowired
    private MatriculaPagamentoRepository matriculaPagamentoRepository;
}
