import Aluno from "../../model/Aluno.ts";
import Button, {ButtonTypes} from "../general/Button.tsx";
import {makeApiDeleteCall} from "../../service/ApiCall.ts";
import {PORTA_ALUNO} from "../../service/PessoaService.ts";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {EDITAR_ALUNO_ROUTE, VISUALIZAR_ALUNO_ROUTE} from "../../AppRoutes.tsx";

interface Props {
    alunos: Aluno[]
}

const onCLickExcluir = (id: number, onDelete: (id: number) => void) => {
    if (window.confirm("Deseja excluir o aluno?")) {
        makeApiDeleteCall(PORTA_ALUNO,
            () => {
                onDelete(id)
            },
            () => {
            },
            [id])
    }
}

function AlunosList({alunos}: Props) {
    const [alunosList, setAlunosList] = useState(alunos);
    useEffect(() => {
        setAlunosList(alunos);
    }, [alunos]);
    const handleDelete = (id: number) => {
        // Filter out the deleted item from the list
        const updatedList = alunosList.filter(aluno => aluno.id !== id);
        setAlunosList(updatedList);
    };
    if (alunosList.length > 0) {
        return <ul className="list-group container pt-5 pb-5">
            {
                alunosList.map((aluno, index) =>
                    <li className="list-group-item d-flex align-items-center justify-content-between" key={index}>
                        {aluno.id} - {aluno.nome}
                        <div className="d-flex justify-content-between w-25">
                            <Link to={VISUALIZAR_ALUNO_ROUTE + '/' + `${aluno.id}`}>
                                <Button title="Visualizar" type={ButtonTypes.Button}
                                        additionalClasses="btn-outline-info"/>
                            </Link>
                            <Link to={EDITAR_ALUNO_ROUTE + '/' + `${aluno.id}`}>
                                <Button title="Editar" type={ButtonTypes.Button}
                                        additionalClasses="btn-outline-warning"/>
                            </Link>
                            <Button onClick={() => onCLickExcluir(aluno.id, handleDelete)} title="Excluir"
                                    type={ButtonTypes.Button}
                                    additionalClasses="btn-outline-danger"/>
                        </div>
                    </li>)
            }
        </ul>
    }
    return <></>
}

export default AlunosList