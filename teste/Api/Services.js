
import {axios} from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080",
    headers: { "Content-Type": "application/json"}
});


export const getTodasPessoasApi = () => api.get(`/api/pessoa/all`);

export const postPessoaApi = (pessoa) => api.post(`/api/pessoa/create`, pessoa);

export const getPessoaByIDPessoa = (id) => api.get(`/api/pessoa/${id}`);


