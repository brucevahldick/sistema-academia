import {ReactNode} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Cadastro from "./pages/Cadastro.tsx";
import Alunos from "./pages/Alunos.tsx";
import AlunosEdit from "./components/aluno/AlunosEdit.tsx";
import AlunosReadonly from "./components/aluno/AlunosReadonly.tsx";

export const CADASTRO_ROUTE: string = '/cadastro';
export const ALUNOS_ROUTE: string = '/alunos';
export const EDITAR_ALUNO_ROUTE: string = '/editar-aluno'
export const VISUALIZAR_ALUNO_ROUTE: string = '/visualizar-aluno'
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
                <Route path={EDITAR_ALUNO_ROUTE + '/:id'} element={<AlunosEdit/>}/>
                <Route path={VISUALIZAR_ALUNO_ROUTE + '/:id'} element={<AlunosReadonly/>}/>
            </Routes>
        </BrowserRouter>
    </>
}

export default AppRoutes