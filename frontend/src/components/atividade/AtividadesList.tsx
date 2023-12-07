import Atividade from "../../model/Atividade.ts";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {EDITAR_ATIVIDADE_ROUTE, VISUALIZAR_ATIVIDADE_ROUTE} from "../../AppRoutes.tsx";
import Button, {ButtonTypes} from "../general/Button.tsx";
import {makeApiDeleteCall} from "../../service/ApiCall.ts";
import {PORTA_ATIVIDADE} from "../../service/AtividadeService.ts";

interface Props {
    atividades: Atividade[]
}

const onCLickExcluir = (id: number, onDelete: (id: number) => void) => {
    if (window.confirm("Deseja excluir o aluno?")) {
        makeApiDeleteCall(PORTA_ATIVIDADE,
            () => {
                onDelete(id)
            },
            () => {
            },
            [id])
    }
}

function AtividadesList({atividades}: Props) {
    const [atividadesList, setAtividadesList] = useState(atividades);
    useEffect(() => {
        setAtividadesList(atividades);
    }, [atividades]);

    const handleDelete = (id: number) => {
        // Filter out the deleted item from the list
        const updatedList = atividadesList.filter(atividade => atividade.id !== id);
        setAtividadesList(updatedList);
    };

    if (atividadesList.length > 0) {
        return <ul className="list-group container pt-5 pb-5">
            {
                atividadesList.map((atividade, index) =>
                    <li className="list-group-item d-flex align-items-center justify-content-between" key={index}>
                        {atividade.id} - {atividade.nome}
                        <div className="d-flex justify-content-between w-25">
                            <Link to={VISUALIZAR_ATIVIDADE_ROUTE + '/' + `${atividade.id}`}>
                                <Button title="Visualizar" type={ButtonTypes.Button}
                                        additionalClasses="btn-outline-info"/>
                            </Link>
                            <Link to={EDITAR_ATIVIDADE_ROUTE + '/' + `${atividade.id}`}>
                                <Button title="Editar" type={ButtonTypes.Button}
                                        additionalClasses="btn-outline-warning"/>
                            </Link>
                            <Button onClick={() => onCLickExcluir(atividade.id, handleDelete)} title="Excluir"
                                    type={ButtonTypes.Button}
                                    additionalClasses="btn-outline-danger"/>
                        </div>
                    </li>)
            }
        </ul>
    }
    return <></>
}

export default AtividadesList