package com.web.backendsistemaacademia.model.matricula;

import com.web.backendsistemaacademia.model.Agendamento;
import com.web.backendsistemaacademia.model.pessoa.Pessoa;
import jakarta.persistence.*;

import java.util.ArrayList;

@Entity
@Table(name = "matricula")
public class Matricula {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(
            name = "matricula_agendamento",
            joinColumns = @JoinColumn(name = "matricula_id"),
            inverseJoinColumns = @JoinColumn(name = "agendamento_id")
    )
    private ArrayList<Agendamento> agendamentos;

    @Column(columnDefinition = "integer")
    private int mesInicio;

    @Column(columnDefinition = "integer")
    private int mesFim;

    @ManyToOne(fetch = FetchType.LAZY)
    private Pessoa pessoa;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ArrayList<Agendamento> getAgendamentos() {
        return agendamentos;
    }

    public void setAgendamentos(ArrayList<Agendamento> agendamentos) {
        this.agendamentos = agendamentos;
    }

    public int getMesInicio() {
        return mesInicio;
    }

    public void setMesInicio(int mesInicio) {
        this.mesInicio = mesInicio;
    }

    public int getMesFim() {
        return mesFim;
    }

    public void setMesFim(int mesFim) {
        this.mesFim = mesFim;
    }

    public Pessoa getPessoa() {
        return pessoa;
    }

    public void setPessoa(Pessoa pessoa) {
        this.pessoa = pessoa;
    }
}
