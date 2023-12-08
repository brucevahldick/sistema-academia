import Aluno from "../model/Aluno.ts";
import {makeApiGetCall} from "./ApiCall.ts";
import Endereco from "../model/Endereco.ts";
import {AxiosResponse} from "axios";

export const PORTA_ALUNO = '/pessoas/aluno';
export const PORTA_INSTRUTOR = '/pessoas/instrutor';

export async function findPessoaById(id: any): Promise<Aluno | null> {
    const response = await makeApiGetCall(PORTA_ALUNO, (response: AxiosResponse) => {
        return response.data;
    }, () => {
    }, [id]);
    return buildPessoaFromPayload(response);
}

export function buildPessoaFromPayload(aluno: any) {
    let fone = '';
    let email = '';
    let celular = '';
    if (aluno.pessoaContatos.length > 0) {
        for (const contato in aluno.pessoaContatos) {
            const valorContato = aluno.pessoaContatos[contato].contato;
            switch (aluno.pessoaContatos[contato].tipo) {
                case 1:
                    email = valorContato;
                    break;
                case 2:
                    fone = valorContato;
                    break;
                case 3:
                    celular = valorContato;
            }
        }
    }
    const endereco = new Endereco('', '', '', '', 0, '');
    if (aluno.pessoaEnderecos.length > 0) {
        endereco.estado = aluno.pessoaEnderecos[0].estado;
        endereco.cidade = aluno.pessoaEnderecos[0].cidade;
        endereco.rua = aluno.pessoaEnderecos[0].rua;
        endereco.cep = aluno.pessoaEnderecos[0].cep;
        endereco.numero = aluno.pessoaEnderecos[0].numero;
        endereco.bairro = aluno.pessoaEnderecos[0].bairro;
    }
    const date = new Date(aluno.dataNascimento);
    return new Aluno(aluno.id,
        aluno.codigo,
        aluno.nome,
        date,
        aluno.sexo,
        aluno.ativo,
        fone,
        celular,
        email,
        endereco
    );
}