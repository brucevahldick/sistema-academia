import Aluno from "../model/Aluno.ts";
import {makeApiGetCall} from "./ApiCall.ts";
import {AxiosResponse} from "axios";
import Endereco from "../model/Endereco.ts";

const handleSuccess = (response: AxiosResponse) => {
    const aluno = response.data;
    let fone = '';
    let email = '';
    let celular = '';
    if (aluno.pessoaContatos) {
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
    if (aluno.pessoaEnderecos) {
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

const handleError = (error: any) => {
    return error;
}

export async function findPessoaById(id: any): Promise<Aluno | null | undefined> {
    const response = await makeApiGetCall('/pessoas/aluno', handleSuccess, handleError, [id]);
    if (response.data.success) {
        // return new Aluno();
    }
    return null;
}