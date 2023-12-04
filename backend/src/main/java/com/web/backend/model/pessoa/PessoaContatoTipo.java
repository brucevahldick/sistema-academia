package com.web.backend.model.pessoa;

public enum PessoaContatoTipo {
    EMAIL(1, "E-mail"),
    TELEFONE(2, "Telefone"),
    CELULAR(3, "Celular");

    private final int id;
    private final String nome;

    PessoaContatoTipo(int id, String nome) {
        this.id = id;
        this.nome = nome;
    }

    public int getId() {
        return id;
    }
}
