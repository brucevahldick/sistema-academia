package com.web.backend.model.atividade;

import com.web.backend.model.pessoa.Pessoa;
import jakarta.persistence.*;

import java.math.BigDecimal;
import java.util.ArrayList;

@Entity
@Table(name = "instrutor_atividade")
public class InstrutorAtividade {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    private Pessoa pessoa;

    @ManyToOne(fetch = FetchType.LAZY)
    private Atividade atividade;

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(
            name = "instrutor_horario",
            joinColumns = @JoinColumn(name = "instrutor_atividade_id"),
            inverseJoinColumns = @JoinColumn(name = "horario_atividade_id")
    )
    private ArrayList<HorarioAtividade> horarios;

    @Column(precision = 10, scale = 2)
    private BigDecimal valorMensalidade;

    @Column(columnDefinition = "integer")
    private int aulasPorSemana;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Pessoa getPessoa() {
        return pessoa;
    }

    public void setPessoa(Pessoa pessoa) {
        this.pessoa = pessoa;
    }

    public Atividade getAtividade() {
        return atividade;
    }

    public void setAtividade(Atividade atividade) {
        this.atividade = atividade;
    }

    public ArrayList<HorarioAtividade> getHorarios() {
        return horarios;
    }

    public void setHorarios(ArrayList<HorarioAtividade> horarios) {
        this.horarios = horarios;
    }

    public BigDecimal getValorMensalidade() {
        return valorMensalidade;
    }

    public void setValorMensalidade(BigDecimal valorMensalidade) {
        this.valorMensalidade = valorMensalidade;
    }

    public int getAulasPorSemana() {
        return aulasPorSemana;
    }

    public void setAulasPorSemana(int aulasPorSemana) {
        this.aulasPorSemana = aulasPorSemana;
    }
}
