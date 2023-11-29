package com.web.backend.repository.pessoa;

import com.web.backend.model.pessoa.PessoaEndereco;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PessoaEnderecoRepository extends JpaRepository<PessoaEndereco, Long> {
}
