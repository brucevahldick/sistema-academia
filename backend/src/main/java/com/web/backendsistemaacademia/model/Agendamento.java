package com.web.backendsistemaacademia.model;

import com.web.backendsistemaacademia.model.atividade.HorarioAtividade;
import com.web.backendsistemaacademia.model.atividade.InstrutorAtividade;
import com.web.backendsistemaacademia.model.atividade.LocalAtividade;
import jakarta.persistence.*;

@Entity
@Table(name = "agendamento")
public class Agendamento {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    private InstrutorAtividade instrutorAtividade;

    @ManyToOne(fetch = FetchType.LAZY)
    private LocalAtividade localAtividade;

    @ManyToOne(fetch = FetchType.LAZY)
    private HorarioAtividade horarioAtividade;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public InstrutorAtividade getInstrutorAtividade() {
        return instrutorAtividade;
    }

    public void setInstrutorAtividade(InstrutorAtividade instrutorAtividade) {
        this.instrutorAtividade = instrutorAtividade;
    }

    public LocalAtividade getLocalAtividade() {
        return localAtividade;
    }

    public void setLocalAtividade(LocalAtividade localAtividade) {
        this.localAtividade = localAtividade;
    }

    public HorarioAtividade getHorarioAtividade() {
        return horarioAtividade;
    }

    public void setHorarioAtividade(HorarioAtividade horarioAtividade) {
        this.horarioAtividade = horarioAtividade;
    }
}
