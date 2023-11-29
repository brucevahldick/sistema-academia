package com.web.backend.model.atividade;

import com.web.backend.model.Midia;
import jakarta.persistence.*;

import java.util.ArrayList;

@Entity
@Table(name = "atividade")
public class Atividade {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(columnDefinition = "text")
    private String nome;

    @Column(columnDefinition = "integer")
    private int duracaoMinutos;

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(
            name = "atividade_midia",
            joinColumns = @JoinColumn(name = "atividade_id"),
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

    public int getDuracaoMinutos() {
        return duracaoMinutos;
    }

    public void setDuracaoMinutos(int duracaoMinutos) {
        this.duracaoMinutos = duracaoMinutos;
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
