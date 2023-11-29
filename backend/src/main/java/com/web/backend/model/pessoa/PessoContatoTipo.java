package com.web.backend.model.pessoa;

public enum PessoContatoTipo {
    EMAIL(1, "E-mail"),
    TELEFONE(2, "Telefone");

    private final int id;
    private final String nome;

    PessoContatoTipo(int id, String nome) {
        this.id = id;
        this.nome = nome;
    }
}
