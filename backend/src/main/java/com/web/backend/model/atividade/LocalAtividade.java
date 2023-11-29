package com.web.backend.model.atividade;

import com.web.backend.model.Midia;
import jakarta.persistence.*;

import java.util.ArrayList;

@Entity
@Table(name = "local_atividade")
public class LocalAtividade {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(columnDefinition = "text")
    private String nome;

    @Column(columnDefinition = "text")
    private String descricao;

    @ManyToOne(fetch = FetchType.LAZY)
    private Atividade atividade;

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(
            name = "local_atividade_midia",
            joinColumns = @JoinColumn(name = "local_atividade_id"),
            inverseJoinColumns = @JoinColumn(name = "midia_id")
    )
    private ArrayList<Midia> imagens;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Atividade getAtividade() {
        return atividade;
    }

    public void setAtividade(Atividade atividade) {
        this.atividade = atividade;
    }

    public void addImagem(Midia midia) {
        this.imagens.add(midia);
    }

    public ArrayList<Midia> getImagens() {
        return imagens;
    }

    public void setImagens(ArrayList<Midia> imagens) {
        this.imagens = imagens;
    }
}
