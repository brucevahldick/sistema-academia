package com.web.backendsistemaacademia.controller;

import com.web.backendsistemaacademia.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class CategoriaController {
    @Autowired
    private CategoriaRepository categoriaRepository;
}
