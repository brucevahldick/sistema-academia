package com.web.backend.model;

import com.web.backend.model.atividade.HorarioAtividade;
import com.web.backend.model.atividade.InstrutorAtividade;
import com.web.backend.model.atividade.LocalAtividade;
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
