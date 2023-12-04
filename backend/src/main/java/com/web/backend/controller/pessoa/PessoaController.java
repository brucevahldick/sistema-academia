package com.web.backend.controller.pessoa;

import com.fasterxml.jackson.databind.JsonNode;
import com.web.backend.model.pessoa.*;
import com.web.backend.repository.pessoa.PessoaContatoRepository;
import com.web.backend.repository.pessoa.PessoaEnderecoRepository;
import com.web.backend.repository.pessoa.PessoaRepository;
import com.web.backend.response.MessageResponse;
import com.web.backend.response.ParamResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.ArrayList;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
public class PessoaController {
    @Autowired
    private PessoaRepository pessoaRepository;

    @Autowired
    private PessoaEnderecoRepository pessoaEnderecoRepository;

    @Autowired
    private PessoaContatoRepository pessoaContatoRepository;

    @GetMapping("/pessoas/aluno")
    public Page<Pessoa> findAllAlunos(Pageable pageable) {
        return pessoaRepository.findAll(pageable);
    }

    @GetMapping("/pessoas/aluno/{pessoaId}")
    public ResponseEntity<Pessoa> findById(@PathVariable Long pessoaId) {
        return pessoaRepository.findById(pessoaId)
                .map(pessoa -> ResponseEntity.ok().body(pessoa))
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/pessoas/aluno")
    public MessageResponse addPessoa(@RequestBody JsonNode jsonNode) {
        Pessoa pessoa = new Pessoa();
        String nome = jsonNode.get("inputNome").asText();
        pessoa.setNome(nome);
        String dataNascimento = jsonNode.get("inputDataNascimento").asText();
        Date dateObject = Date.valueOf(dataNascimento);
        pessoa.setDataNascimento(dateObject);
        String sexo = jsonNode.get("inputSexo").asText();
        pessoa.setSexo(sexo);
        String ativo = jsonNode.get("inputAtivo").asText();
        pessoa.setAtivo(Boolean.parseBoolean(ativo));
        pessoa.setTipo(PessoaTipo.ALUNO.getId());
        pessoaRepository.save(pessoa);
        if (jsonNode.has("inputEmail")) {
            String email = jsonNode.get("inputEmail").asText();
            PessoaContato pessoaContato = new PessoaContato();
            pessoaContato.setContato(email);
            pessoaContato.setPessoa(pessoa);
            pessoaContato.setTipo(PessoaContatoTipo.EMAIL.getId());
            pessoaContatoRepository.save(pessoaContato);
        }
        if (jsonNode.has("inputFone")) {
            String fone = jsonNode.get("inputFone").asText();
            PessoaContato pessoaContato = new PessoaContato();
            pessoaContato.setContato(fone);
            pessoaContato.setPessoa(pessoa);
            pessoaContato.setTipo(PessoaContatoTipo.TELEFONE.getId());
            pessoaContatoRepository.save(pessoaContato);
        }
        if (jsonNode.has("inputCelular")) {
            String celular = jsonNode.get("inputCelular").asText();
            PessoaContato pessoaContato = new PessoaContato();
            pessoaContato.setContato(celular);
            pessoaContato.setPessoa(pessoa);
            pessoaContato.setTipo(PessoaContatoTipo.CELULAR.getId());
            pessoaContatoRepository.save(pessoaContato);
        }
        String cep = jsonNode.get("inputCEP").asText();
        String cidade = jsonNode.get("inputCidade").asText();
        String uf = jsonNode.get("inputUF").asText();
        String rua = jsonNode.get("inputRua").asText();
        String numero = jsonNode.get("inputNumero").asText();
        String bairro = jsonNode.get("inputBairro").asText();
        PessoaEndereco pessoaEndereco = new PessoaEndereco();
        pessoaEndereco.setCep(cep);
        pessoaEndereco.setCidade(cidade);
        pessoaEndereco.setEstado(uf);
        pessoaEndereco.setRua(rua);
        pessoaEndereco.setNumero(numero);
        pessoaEndereco.setBairro(bairro);
        pessoaEnderecoRepository.save(pessoaEndereco);
        return this.operate(pessoa, "adicionado");
    }

    @DeleteMapping("/pessoas/aluno/{pessoaId}")
    public MessageResponse removePessoa(@PathVariable Long pessoaId) {
        try {
            Optional<Pessoa> pessoa = pessoaRepository.findById(pessoaId);
            if (pessoa.isPresent()) {
                pessoa.get().setAtivo(false);
                pessoaRepository.save(pessoa.get());
                return this.operate(pessoa.get(), "Pessoa removida");
            } else {
                throw new Exception("Pessoa não encontrada");
            }
        } catch (Exception exception) {
            return new MessageResponse(false, exception.getMessage());
        }
    }

    private MessageResponse operate(Pessoa pessoa, String textoSucesso) {
        try {
            ArrayList<ParamResponse> params = new ArrayList<>();
            params.add(new ParamResponse("pessoaId", pessoa.getId()));
            return new MessageResponse(true, "Aluno " + textoSucesso + " com sucesso", params);
        } catch (Exception exception) {
            return new MessageResponse(false, exception.getMessage());
        }
    }
}
