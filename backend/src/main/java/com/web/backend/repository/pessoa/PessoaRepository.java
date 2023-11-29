package com.web.backendsistemaacademia.repository.pessoa;

import com.web.backendsistemaacademia.model.pessoa.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PessoaRepository extends JpaRepository<Pessoa, Long> {
}
