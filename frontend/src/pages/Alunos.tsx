import AlunosList from "../components/aluno/AlunosList.tsx";
import {AxiosResponse} from "axios";
import {makeApiGetCall} from "../service/ApiCall.ts";
import {useEffect, useState} from "react";
import {buildPessoaFromPayload} from "../service/PessoaService.ts";
import Aluno from "../model/Aluno.ts";

const LIST_ALL_ALUNOS = 'pessoas/aluno';

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

        makeApiGetCall(LIST_ALL_ALUNOS, apiReturnSuccess, apiReturnError);
    }, []);
    return <AlunosList alunos={alunosList}/>
}

export default Alunos