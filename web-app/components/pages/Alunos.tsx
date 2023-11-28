import React, { useState } from "react";

const Alunos = () => {
  const [alunos, setAlunos] = useState(['Alice', 'Bob', 'Carlos', 'Diana']);
  const [novoAluno, setNovoAluno] = useState("");
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
      <h2>Lista de Alunos</h2>
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
                <button onClick={() => editarAluno()}>Editar</button>
                <button onClick={() => excluirAluno()}>Excluir</button>
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

export default Alunos;
