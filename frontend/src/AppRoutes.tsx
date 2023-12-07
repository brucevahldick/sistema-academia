import {ReactNode} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Alunos from "./pages/Alunos.tsx";
import AlunosEdit from "./components/aluno/AlunosEdit.tsx";
import AlunosReadonly from "./components/aluno/AlunosReadonly.tsx";
import Atividades from "./pages/Atividades.tsx";
import AlunosCadastro from "./components/aluno/AlunosCadastro.tsx";
import AtividadesCadastro from "./components/atividade/AtividadesCadastro.tsx";
import AtividadesEdit from "./components/atividade/AtividadesEdit.tsx";
import AtividadesReadonly from "./components/atividade/AtividadesReadonly.tsx";

export const ALUNOS_ROUTE: string = '/alunos';
export const CADASTRO_ALUNO_ROUTE: string = '/cadastro-aluno';
export const EDITAR_ALUNO_ROUTE: string = '/editar-aluno'
export const VISUALIZAR_ALUNO_ROUTE: string = '/visualizar-aluno'
export const ATIVIDADES_ROUTE = '/atividades';
export const CADASTRO_ATIVIDADE_ROUTE: string = '/cadastro-atividade';
export const EDITAR_ATIVIDADE_ROUTE: string = '/editar-atividade'
export const VISUALIZAR_ATIVIDADE_ROUTE: string = '/visualizar-atividade'

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
                {/* Aluno */}
                <Route path={ALUNOS_ROUTE} element={<Alunos/>}/>
                <Route path={CADASTRO_ALUNO_ROUTE} element={<AlunosCadastro/>}/>
                <Route path={EDITAR_ALUNO_ROUTE + '/:id'} element={<AlunosEdit/>}/>
                <Route path={VISUALIZAR_ALUNO_ROUTE + '/:id'} element={<AlunosReadonly/>}/>
                {/* Atividade */}
                <Route path={ATIVIDADES_ROUTE} element={<Atividades/>}/>
                <Route path={CADASTRO_ATIVIDADE_ROUTE} element={<AtividadesCadastro/>}/>
                <Route path={EDITAR_ATIVIDADE_ROUTE + '/:id'} element={<AtividadesEdit/>}/>
                <Route path={VISUALIZAR_ATIVIDADE_ROUTE + '/:id'} element={<AtividadesReadonly/>}/>
            </Routes>
        </BrowserRouter>
    </>
}

export default AppRoutes