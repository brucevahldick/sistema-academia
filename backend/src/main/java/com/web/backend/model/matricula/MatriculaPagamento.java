package com.web.backend.model.matricula;

import com.web.backend.model.Pagamento;
import jakarta.persistence.*;

@Entity
@Table(name = "matricula_pagamento")
public class MatriculaPagamento extends Pagamento {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    private Matricula matricula;

    public Matricula getMatricula() {
        return matricula;
    }

    public void setMatricula(Matricula matricula) {
        this.matricula = matricula;
    }
}
