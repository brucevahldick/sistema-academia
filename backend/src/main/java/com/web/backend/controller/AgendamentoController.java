package com.web.backend.controller;

import com.web.backend.repository.AgendamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class AgendamentoController {
    @Autowired
    private AgendamentoRepository agendamentoRepository;
}
