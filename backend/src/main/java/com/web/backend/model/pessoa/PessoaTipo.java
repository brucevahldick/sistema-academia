package com.web.backend.model.pessoa;

public enum PessoaTipo {
    INSTRUTOR(1, "Instrutor"),
    ALUNO(2, "Aluno"),
    VISITANTE(3, "Visitante");

    private final int id;
    private final String nome;

    PessoaTipo(int id, String nome) {
        this.id = id;
        this.nome = nome;
    }
}
