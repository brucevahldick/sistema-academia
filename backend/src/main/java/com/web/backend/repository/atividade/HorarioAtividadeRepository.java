package com.web.backend.repository.atividade;

import com.web.backend.model.atividade.HorarioAtividade;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HorarioAtividadeRepository extends JpaRepository<HorarioAtividade, Long> {
}
