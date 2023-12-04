import {ReactNode} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Cadastro from "./pages/Cadastro.tsx";
import Alunos from "./pages/Alunos.tsx";

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

interface Props {
    children: ReactNode
}

function AppRoutes({children}: Props) {

    return <>
        <BrowserRouter>
            {children}
            <Routes>
                <Route index element={<Home/>}/>
                <Route path={CADASTRO_ROUTE} element={<Cadastro/>}/>
                <Route path={ALUNOS_ROUTE} element={<Alunos/>}/>
            </Routes>
        </BrowserRouter>
    </>
}

export default AppRoutes