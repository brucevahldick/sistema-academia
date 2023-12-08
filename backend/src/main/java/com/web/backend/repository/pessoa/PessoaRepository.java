package com.web.backend.repository.pessoa;

import com.web.backend.model.pessoa.Pessoa;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PessoaRepository extends JpaRepository<Pessoa, Long> {
    Page<Pessoa> findByTipo(int tipo, Pageable pageable);
}
