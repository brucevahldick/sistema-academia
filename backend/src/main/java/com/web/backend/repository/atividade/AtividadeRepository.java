package com.web.backend.repository.atividade;

import com.web.backend.model.atividade.Atividade;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AtividadeRepository extends JpaRepository<Atividade, Long> {
}
