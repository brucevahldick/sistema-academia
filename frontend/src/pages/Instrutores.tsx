import InstrutoresList from "../components/instrutor/InstrutoresList.tsx";
import {Link} from "react-router-dom";
import {CADASTRO_INSTRUTOR_ROUTE} from "../AppRoutes.tsx";
import Button, {ButtonTypes} from "../components/general/Button.tsx";
import {useEffect, useState} from "react";
import Aluno from "../model/Aluno.ts";
import {AxiosResponse} from "axios";
import {buildPessoaFromPayload, PORTA_INSTRUTOR} from "../service/PessoaService.ts";
import {makeApiGetCall} from "../service/ApiCall.ts";

const apiReturnError = (error: any) => {
    return error;
}

function Instrutores() {
    const [instrutoresList, setInstrutoresList] = useState<Aluno[]>([]);
    useEffect(() => {
        const apiReturnSuccess = (response: AxiosResponse) => {
            let jsonInstrutores = response.data.content;
            let listaInstrutores: Aluno[] = [];
            if (jsonInstrutores.length > 0) {
                listaInstrutores = jsonInstrutores.map((alunoData: any) => {
                    return buildPessoaFromPayload(alunoData);
                });
            }
            setInstrutoresList(listaInstrutores);
            return null;
        }

        makeApiGetCall(PORTA_INSTRUTOR, apiReturnSuccess, apiReturnError);
    }, []);
    return <>
        <div className={"container pt-5"}>
            <Link to={CADASTRO_INSTRUTOR_ROUTE}>
                <Button title={"Cadastro"} type={ButtonTypes.Button} additionalClasses="btn-outline-success"/>
            </Link>
        </div>
        <InstrutoresList instrutores={instrutoresList}/>
    </>
}

export default Instrutores