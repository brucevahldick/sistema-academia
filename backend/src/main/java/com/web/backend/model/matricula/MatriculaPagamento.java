package com.web.backendsistemaacademia.model.matricula;

import com.web.backendsistemaacademia.model.Pagamento;
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
