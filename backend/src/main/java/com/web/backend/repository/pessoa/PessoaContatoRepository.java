package com.web.backend.repository.pessoa;

import com.web.backend.model.pessoa.PessoaContato;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PessoaContatoRepository extends JpaRepository<PessoaContato, Long> {
}
