import React, { useState } from "react";

const Produtos = () => {
  const [alunos, setProdutos] = useState(['Alice', 'Bob', 'Carlos', 'Diana']);
  const [novoAluno, setNovoProduto] = useState("");
  const [editandoIndex, setEditandoIndex] = useState(null);

  const adicionarAluno = () => {
    // Implemente a lógica para adicionar um novo aluno
  };

  const editarAluno = () => {
    // Implemente a lógica para editar um aluno
  };

  const salvarEdicao = () => {
    // Implemente a lógica para salvar a edição de um aluno
  };

  const excluirAluno = () => {
    // Implemente a lógica para excluir um aluno
  };

  return (
    <div>
      <h2>Lista de Produtos</h2>
      <ul>
        {alunos.map((aluno, index) => (
          <li key={index}>
            {editandoIndex === index ? (
              <>
                <input
                  type="text"
                  value={novoAluno}
                  onChange={(e) => setNovoAluno(e.target.value)}
                />
                <button onClick={salvarEdicao}>Salvar</button>
              </>
            ) : (
              <>
                {aluno}
                <button onClick={() => editarProduto()}>Editar</button>
                <button onClick={() => excluirProduto()}>Excluir</button>
              </>
            )}
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={novoAluno}
          onChange={(e) => setNovoAluno(e.target.value)}
        />
        <button onClick={adicionarAluno}>Adicionar Aluno</button>
      </div>
    </div>
  );
};

export default Produtos;