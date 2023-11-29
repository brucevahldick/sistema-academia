package com.web.backend.repository.atividade;

import com.web.backend.model.atividade.LocalAtividade;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LocalAtividadeRepository extends JpaRepository<LocalAtividade, Long> {
}
