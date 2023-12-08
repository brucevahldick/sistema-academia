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
        return pessoaRepository.findByTipo(PessoaTipo.ALUNO.getId(), pageable);
    }

    @GetMapping("/pessoas/aluno/{pessoaId}")
    public ResponseEntity<Pessoa> findAlunoById(@PathVariable Long pessoaId) {
        return pessoaRepository.findById(pessoaId).map(pessoa -> ResponseEntity.ok().body(pessoa)).orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/pessoas/aluno")
    public MessageResponse addAluno(@RequestBody JsonNode jsonNode) {
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
        return this.operateAluno(pessoa, "adicionado");
    }

    @PostMapping("/pessoas/aluno")
    public MessageResponse editAluno(@RequestBody JsonNode jsonNode) {
        if (jsonNode.has("inputId")) {
            String id = jsonNode.get("inputId").asText();
            if (id != null) {
                Long idLong = Long.parseLong(id);
                Pessoa pessoa = pessoaRepository.findById(idLong).get();
                String nome = jsonNode.get("inputNome").asText();
                pessoa.setNome(nome);
                String sexo = jsonNode.get("inputSexo").asText();
                pessoa.setSexo(sexo);
                String ativo = jsonNode.get("inputAtivo").asText();
                pessoa.setAtivo(Boolean.parseBoolean(ativo));
                pessoaRepository.save(pessoa);
                for (PessoaContato pessoaContato : pessoa.getPessoaContatos()) {
                    if (pessoaContato.getTipo() == PessoaContatoTipo.EMAIL.getId()) {
                        if (jsonNode.has("inputEmail")) {
                            String email = jsonNode.get("inputEmail").asText();
                            pessoaContato.setContato(email);
                            pessoaContato.setPessoa(pessoa);
                            pessoaContato.setTipo(PessoaContatoTipo.EMAIL.getId());
                            pessoaContatoRepository.save(pessoaContato);
                        }
                    } else if (pessoaContato.getTipo() == PessoaContatoTipo.TELEFONE.getId()) {
                        if (jsonNode.has("inputFone")) {
                            String fone = jsonNode.get("inputFone").asText();
                            pessoaContato.setContato(fone);
                            pessoaContato.setPessoa(pessoa);
                            pessoaContato.setTipo(PessoaContatoTipo.TELEFONE.getId());
                            pessoaContatoRepository.save(pessoaContato);
                        }
                    } else if (pessoaContato.getTipo() == PessoaContatoTipo.CELULAR.getId()) {
                        if (jsonNode.has("inputCelular")) {
                            String celular = jsonNode.get("inputCelular").asText();
                            pessoaContato.setContato(celular);
                            pessoaContato.setPessoa(pessoa);
                            pessoaContato.setTipo(PessoaContatoTipo.CELULAR.getId());
                            pessoaContatoRepository.save(pessoaContato);
                        }
                    }
                }
                return this.operateAluno(pessoa, "adicionado");
            }
        }
        return new MessageResponse(false, "Pessoa não encontrada");
    }

    @DeleteMapping("/pessoas/aluno/{pessoaId}")
    public MessageResponse removeAluno(@PathVariable Long pessoaId) {
        try {
            Optional<Pessoa> pessoa = pessoaRepository.findById(pessoaId);
            if (pessoa.isPresent()) {
                pessoaRepository.delete(pessoa.get());
                return new MessageResponse(true, "Aluno removido com sucesso");
            }
            throw new Exception("Pessoa não encontrada");
        } catch (Exception exception) {
            return new MessageResponse(false, exception.getMessage());
        }
    }

    private MessageResponse operateAluno(Pessoa pessoa, String textoSucesso) {
        try {
            ArrayList<ParamResponse> params = new ArrayList<>();
            params.add(new ParamResponse("pessoaId", pessoa.getId()));
            return new MessageResponse(true, "Aluno " + textoSucesso + " com sucesso", params);
        } catch (Exception exception) {
            return new MessageResponse(false, exception.getMessage());
        }
    }

    @GetMapping("/pessoas/instrutor")
    public Page<Pessoa> findAllInstrutores(Pageable pageable) {
        return pessoaRepository.findByTipo(PessoaTipo.INSTRUTOR.getId(), pageable);
    }

    @GetMapping("/pessoas/instrutor/{pessoaId}")
    public ResponseEntity<Pessoa> findInstrutorById(@PathVariable Long pessoaId) {
        return pessoaRepository.findById(pessoaId).map(pessoa -> ResponseEntity.ok().body(pessoa)).orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/pessoas/instrutor")
    public MessageResponse addInstrutor(@RequestBody JsonNode jsonNode) {
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
        pessoa.setTipo(PessoaTipo.INSTRUTOR.getId());
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
        return this.operateAluno(pessoa, "adicionado");
    }

    @PostMapping("/pessoas/instrutor")
    public MessageResponse editInstrutor(@RequestBody JsonNode jsonNode) {
        if (jsonNode.has("inputId")) {
            String id = jsonNode.get("inputId").asText();
            if (id != null) {
                Long idLong = Long.parseLong(id);
                Pessoa pessoa = pessoaRepository.findById(idLong).get();
                String nome = jsonNode.get("inputNome").asText();
                pessoa.setNome(nome);
                String sexo = jsonNode.get("inputSexo").asText();
                pessoa.setSexo(sexo);
                String ativo = jsonNode.get("inputAtivo").asText();
                pessoa.setAtivo(Boolean.parseBoolean(ativo));
                pessoaRepository.save(pessoa);
                for (PessoaContato pessoaContato : pessoa.getPessoaContatos()) {
                    if (pessoaContato.getTipo() == PessoaContatoTipo.EMAIL.getId()) {
                        if (jsonNode.has("inputEmail")) {
                            String email = jsonNode.get("inputEmail").asText();
                            pessoaContato.setContato(email);
                            pessoaContato.setPessoa(pessoa);
                            pessoaContato.setTipo(PessoaContatoTipo.EMAIL.getId());
                            pessoaContatoRepository.save(pessoaContato);
                        }
                    } else if (pessoaContato.getTipo() == PessoaContatoTipo.TELEFONE.getId()) {
                        if (jsonNode.has("inputFone")) {
                            String fone = jsonNode.get("inputFone").asText();
                            pessoaContato.setContato(fone);
                            pessoaContato.setPessoa(pessoa);
                            pessoaContato.setTipo(PessoaContatoTipo.TELEFONE.getId());
                            pessoaContatoRepository.save(pessoaContato);
                        }
                    } else if (pessoaContato.getTipo() == PessoaContatoTipo.CELULAR.getId()) {
                        if (jsonNode.has("inputCelular")) {
                            String celular = jsonNode.get("inputCelular").asText();
                            pessoaContato.setContato(celular);
                            pessoaContato.setPessoa(pessoa);
                            pessoaContato.setTipo(PessoaContatoTipo.CELULAR.getId());
                            pessoaContatoRepository.save(pessoaContato);
                        }
                    }
                }
                return this.operateAluno(pessoa, "adicionado");
            }
        }
        return new MessageResponse(false, "Pessoa não encontrada");
    }

    @DeleteMapping("/pessoas/instrutor/{pessoaId}")
    public MessageResponse removeInstrutor(@PathVariable Long pessoaId) {
        try {
            Optional<Pessoa> pessoa = pessoaRepository.findById(pessoaId);
            if (pessoa.isPresent()) {
                pessoaRepository.delete(pessoa.get());
                return new MessageResponse(true, "Aluno removido com sucesso");
            }
            throw new Exception("Pessoa não encontrada");
        } catch (Exception exception) {
            return new MessageResponse(false, exception.getMessage());
        }
    }
}
