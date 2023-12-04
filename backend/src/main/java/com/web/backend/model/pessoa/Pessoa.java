package com.web.backend.model.pessoa;

import jakarta.persistence.*;

import java.sql.Date;
import java.util.List;

@Entity
@Table(name = "pessoa")
public class Pessoa {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(columnDefinition = "text")
    private String nome;

    @Column(columnDefinition = "text")
    private String sexo;

    @Column(columnDefinition = "date")
    private Date dataNascimento;

    @Column(columnDefinition = "boolean")
    private boolean ativo;

    @Column(columnDefinition = "integer")
    private int tipo;

    @Column(columnDefinition = "text")
    private String codigo;

    @OneToMany(mappedBy = "pessoa", cascade = CascadeType.ALL)
    private List<PessoaEndereco> pessoaEnderecos;

    @OneToMany(mappedBy = "pessoa", cascade = CascadeType.ALL)
    private List<PessoaContato> pessoaContatos;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public Date getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(Date dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public boolean isAtivo() {
        return ativo;
    }

    public void setAtivo(boolean ativo) {
        this.ativo = ativo;
    }

    public int getTipo() {
        return tipo;
    }

    public void setTipo(int tipo) {
        this.tipo = tipo;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public List<PessoaEndereco> getPessoaEnderecos() {
        return pessoaEnderecos;
    }

    public void setPessoaEnderecos(List<PessoaEndereco> pessoaEnderecos) {
        this.pessoaEnderecos = pessoaEnderecos;
    }

    public List<PessoaContato> getPessoaContatos() {
        return pessoaContatos;
    }

    public void setPessoaContatos(List<PessoaContato> pessoaContatos) {
        this.pessoaContatos = pessoaContatos;
    }

    @Override
    public String toString() {
        return "Pessoa: {" +
                "id: " + id +
                ", nome: '" + nome + '\'' +
                ", sexo: '" + sexo + '\'' +
                ", dataNascimento: " + dataNascimento +
                ", ativo: " + ativo +
                ", tipo: " + tipo +
                ", codigo: '" + codigo + '\'' +
                ", pessoaEnderecos: " + pessoaEnderecos +
                ", pessoaContatos: " + pessoaContatos +
                '}';
    }
}

