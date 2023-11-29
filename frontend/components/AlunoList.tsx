import Aluno from "./model/Aluno";
import Button, {ButtonTypes} from "./Button";
import {getTodasPessoasApi} from "../Api/Services";
import react , {useState} from "react";
import { useEffect } from "react";


function AlunoList() {
    const [alunos,setAlunos]= useState([]);

    useEffect(()=>{
        let data = [];
        getTodasPessoasApi().then((response)=>{
            setAlunos(response);
        });

    
    })
    

    return <ul className="list-group-flush" style={{display: "flex", flexDirection: "column", gap: "16px"}}>
        {alunos.map((aluno, index) =>
            <li className="list-group-item" style={{display: "flex", width: "100%", justifyContent: "space-around"}}>
                <ul className="list-group list-group-horizontal">
                    <li className="list-group-item">
                        {aluno.codigo}
                    </li>
                    <li className="list-group-item">
                        {aluno.nome}
                    </li>
                    <li className="list-inline-item">
                        <Button title="Editar" type={ButtonTypes.Button}
                        onClick={atualizarEventos}/>
                    </li>
                    <li className="list-inline-item">
                        <Button title="Excluir" type={ButtonTypes.Button}/>
                    </li>
                </ul>
            </li>)
        }
    </ul>
}

export default AlunoList