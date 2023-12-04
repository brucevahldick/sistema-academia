import AlunosList from "../components/aluno/AlunosList.tsx";
import {AxiosResponse} from "axios";
import {makeApiGetCall} from "../service/ApiCall.ts";

const LIST_ALL_ALUNOS = 'pessoas/alunos/getall';

const apiReturnSuccess = (response: AxiosResponse) => {
    let jsonAlunos = response.data.content;
    let listaAlunos = [];
    if (jsonAlunos.length > 0) {
        listaAlunos = jsonAlunos.map((alunoData: any) => {
            listaAlunos = alunoData
        })
    }
    return listaAlunos;
}

const apiReturnError = (error: any) => {
    return error;
}

function Alunos() {
    const alunosList = makeApiGetCall(LIST_ALL_ALUNOS, apiReturnSuccess, apiReturnError);
    if (alunosList && alunosList.length > 0) {
        return <AlunosList alunos={alunosList}/>
    }
    return <></>
}

export default Alunos