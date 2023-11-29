package com.web.backend.model.atividade;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "horario_atividade")
public class HorarioAtividade {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(columnDefinition = "timestamp")
    private LocalDateTime horarioInicio;

    @Column(columnDefinition = "timestamp")
    private LocalDateTime horarioFim;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getHorarioInicio() {
        return horarioInicio;
    }

    public void setHorarioInicio(LocalDateTime horarioInicio) {
        this.horarioInicio = horarioInicio;
    }

    public LocalDateTime getHorarioFim() {
        return horarioFim;
    }

    public void setHorarioFim(LocalDateTime horarioFim) {
        this.horarioFim = horarioFim;
    }
}
