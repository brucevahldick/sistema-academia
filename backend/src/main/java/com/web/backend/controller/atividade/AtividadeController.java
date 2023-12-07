package com.web.backend.controller.atividade;

import com.web.backend.model.atividade.Atividade;
import com.web.backend.repository.atividade.AtividadeRepository;
import com.web.backend.response.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
public class AtividadeController {
    @Autowired
    private AtividadeRepository atividadeRepository;

    @PutMapping("/atividades")
    public MessageResponse add(@RequestBody Atividade atividade) {
        try {
            atividadeRepository.save(atividade);
            return new MessageResponse(true, "Atividade " + atividade.getNome() + " inserida com sucesso.");
        } catch (Exception exception) {
            return new MessageResponse(false, exception.getMessage());
        }
    }

    @GetMapping("/atividades")
    public Page<Atividade> findAllAtividades(Pageable pageable) {
        return atividadeRepository.findAll(pageable);
    }

    @GetMapping("/atividades/{atividadeId}")
    public ResponseEntity<Atividade> findById(@PathVariable Long atividadeId) {
        return atividadeRepository.findById(atividadeId).map(atividade -> ResponseEntity.ok().body(atividade)).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/atividades/{atividadeId}")
    public MessageResponse removeAtividade(@PathVariable Long atividadeId) {
        try {
            Optional<Atividade> atividade = atividadeRepository.findById(atividadeId);
            if (atividade.isPresent()) {
                atividadeRepository.delete(atividade.get());
                return new MessageResponse(true, "Atividade removida com sucesso");
            }
            throw new Exception("Atividade não encontrada");
        } catch (Exception exception) {
            return new MessageResponse(false, exception.getMessage());
        }
    }

    @PostMapping("/atividades")
    public MessageResponse edit(@RequestBody Atividade atividade) {
        try {
            atividadeRepository.save(atividade);
            return new MessageResponse(true, "Atividade " + atividade.getNome() + " alterada com sucesso");
        } catch (Exception exception) {
            return new MessageResponse(false, exception.getMessage());
        }
    }
}
