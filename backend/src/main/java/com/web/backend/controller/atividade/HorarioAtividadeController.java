package com.web.backend.controller.atividade;

import com.web.backend.repository.atividade.HorarioAtividadeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class HorarioAtividadeController {
    @Autowired
    private HorarioAtividadeRepository horarioAtividadeRepository;
}
