import AlunosList from "../components/aluno/AlunosList.tsx";
import {AxiosResponse} from "axios";
import {makeApiGetCall} from "../service/ApiCall.ts";
import {useEffect, useState} from "react";
import {buildPessoaFromPayload, PORTA_ALUNO} from "../service/PessoaService.ts";
import Aluno from "../model/Aluno.ts";
import {Link} from "react-router-dom";
import {CADASTRO_ALUNO_ROUTE} from "../AppRoutes.tsx";
import Button, {ButtonTypes} from "../components/general/Button.tsx";

const apiReturnError = (error: any) => {
    return error;
}

function Alunos() {
    const [alunosList, setAlunosList] = useState<Aluno[]>([]);
    useEffect(() => {
        const apiReturnSuccess = (response: AxiosResponse) => {
            let jsonAlunos = response.data.content;
            let listaAlunos: Aluno[] = [];
            if (jsonAlunos.length > 0) {
                listaAlunos = jsonAlunos.map((alunoData: any) => {
                    return buildPessoaFromPayload(alunoData);
                });
            }
            setAlunosList(listaAlunos);
            return null;
        }

        makeApiGetCall(PORTA_ALUNO, apiReturnSuccess, apiReturnError);
    }, []);
    return <>
        <div className={"container pt-5"}>
            <Link to={CADASTRO_ALUNO_ROUTE}>
                <Button title={"Cadastro"} type={ButtonTypes.Button} additionalClasses="btn-outline-success"/>
            </Link>
        </div>
        <AlunosList alunos={alunosList}/>
    </>
}

export default Alunos