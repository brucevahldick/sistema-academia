import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "../components/Layout";
import Home from "./Home";
import Cadastro from "./Cadastro";
import Alunos from "./Alunos";

export const CADASTRO_ROUTE: string = '/cadastro';
export const ALUNOS_ROUTE: string = '/alunos';
export const HORARIOS_ROUTE: string = '/horários';
export const VENDAS_ROUTE: string = '/vendas';
export const COMPRAS_ROUTE: string = '/compras';
export const CAIXA_ROUTE: string = '/caixa';
export const SISTEMA_ROUTE: string = '/sistema';
export const RELATORIOS_ROUTE: string = '/relatórios';
export const AJUDA_ROUTE: string = '/ajuda';
export const SAIR_ROUTE: string = '/sair';

function AppRoutes() {

    return <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path={CADASTRO_ROUTE} element={<Cadastro/>}/>
            <Route path={ALUNOS_ROUTE} element={<Alunos/>}/>
        </Routes>
    </BrowserRouter>
}

export default AppRoutes