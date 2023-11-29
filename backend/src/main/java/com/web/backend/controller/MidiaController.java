package com.web.backendsistemaacademia.controller;

import com.web.backendsistemaacademia.repository.MidiaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class MidiaController {
    @Autowired
    private MidiaRepository midiaRepository;
}
