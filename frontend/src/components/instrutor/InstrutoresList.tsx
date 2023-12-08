import Aluno from "../../model/Aluno.ts";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {
    EDITAR_INSTRUTOR_ROUTE,
    VISUALIZAR_INSTRUTOR_ROUTE
} from "../../AppRoutes.tsx";
import Button, {ButtonTypes} from "../general/Button.tsx";
import {makeApiDeleteCall} from "../../service/ApiCall.ts";
import {PORTA_INSTRUTOR} from "../../service/PessoaService.ts";

interface Props {
    instrutores: Aluno[]
}

const onCLickExcluir = (id: number, onDelete: (id: number) => void) => {
    if (window.confirm("Deseja excluir o aluno?")) {
        makeApiDeleteCall(PORTA_INSTRUTOR, () => {
                onDelete(id)
            },
            () => {
            },
            [id]);
    }
}

function InstrutoresList({instrutores}: Props) {
    const [instrutoresList, setInstrutoresList] = useState(instrutores);
    useEffect(() => {
        setInstrutoresList(instrutores);
    }, [instrutores]);

    const handleDelete = (id: number) => {
        // Filter out the deleted item from the list
        const updatedList = instrutoresList.filter(instrutor => instrutor.id !== id);
        setInstrutoresList(updatedList);
    };

    if (instrutoresList.length > 0) {
        return <ul className="list-group container pt-5 pb-5">
            {
                instrutoresList.map((instrutor, index) =>
                    <li className="list-group-item d-flex align-items-center justify-content-between" key={index}>
                        {instrutor.id} - {instrutor.nome}
                        <div className="d-flex justify-content-between w-25">
                            <Link to={VISUALIZAR_INSTRUTOR_ROUTE + '/' + `${instrutor.id}`}>
                                <Button title="Visualizar" type={ButtonTypes.Button}
                                        additionalClasses="btn-outline-info"/>
                            </Link>
                            <Link to={EDITAR_INSTRUTOR_ROUTE + '/' + `${instrutor.id}`}>
                                <Button title="Editar" type={ButtonTypes.Button}
                                        additionalClasses="btn-outline-warning"/>
                            </Link>
                            <Button onClick={() => onCLickExcluir(instrutor.id, handleDelete)} title="Excluir"
                                    type={ButtonTypes.Button}
                                    additionalClasses="btn-outline-danger"/>
                        </div>
                    </li>)
            }
        </ul>
    }
    return <></>
}

export default InstrutoresList