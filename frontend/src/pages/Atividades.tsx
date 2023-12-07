import AtividadesList from "../components/atividade/AtividadesList.tsx";
import {useEffect, useState} from "react";
import {AxiosResponse} from "axios";
import {makeApiGetCall} from "../service/ApiCall.ts";
import Atividade from "../model/Atividade.ts";
import {buildAtividadeFromPayload, PORTA_ATIVIDADE} from "../service/AtividadeService.ts";
import {Link} from "react-router-dom";
import {CADASTRO_ATIVIDADE_ROUTE} from "../AppRoutes.tsx";
import Button, {ButtonTypes} from "../components/general/Button.tsx";

const apiReturnError = (error: any) => {
    return error;
}

function Atividades() {
    const [atividadesList, setAtividadesList] = useState<Atividade[]>([]);
    useEffect(() => {
        const apiReturnSuccess = (response: AxiosResponse) => {
            let jsonAtividades = response.data.content;
            let listaAtividades: Atividade[] = [];
            if (jsonAtividades.length > 0) {
                listaAtividades = jsonAtividades.map((alunoData: any) => {
                    return buildAtividadeFromPayload(alunoData);
                });
            }
            setAtividadesList(listaAtividades);
            return null;
        }

        makeApiGetCall(PORTA_ATIVIDADE, apiReturnSuccess, apiReturnError);
    }, []);
    return <>
        <div className={"container pt-5"}>
            <Link to={CADASTRO_ATIVIDADE_ROUTE}>
                <Button title={"Cadastro"} type={ButtonTypes.Button} additionalClasses="btn-outline-success"/>
            </Link>
        </div>
        <AtividadesList atividades={atividadesList}/>
    </>
}

export default Atividades