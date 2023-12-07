import Atividade from "../model/Atividade.ts";
import {makeApiGetCall} from "./ApiCall.ts";
import {AxiosResponse} from "axios";

export const PORTA_ATIVIDADE = '/atividades';

export async function findAtividadeById(id: any): Promise<Atividade | null> {
    const response = await makeApiGetCall(PORTA_ATIVIDADE, (response: AxiosResponse) => {
        return response.data;
    }, () => {
    }, [id]);
    return buildAtividadeFromPayload(response);
}

export function buildAtividadeFromPayload(atividade: any) {
    return new Atividade(
        atividade.id,
        atividade.nome,
        atividade.duracaoMinutos
    );
}