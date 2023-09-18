import AppRoutes, {
    AJUDA_ROUTE,
    ALUNOS_ROUTE,
    CADASTRO_ROUTE,
    CAIXA_ROUTE,
    COMPRAS_ROUTE,
    HORARIOS_ROUTE, RELATORIOS_ROUTE, SAIR_ROUTE, SISTEMA_ROUTE,
    VENDAS_ROUTE
} from "./AppRoutes";
import MenuItemModel from "../model/MenuItemModel";
import Menu from "../layout/Menu";

const menus = [
    new MenuItemModel('Home', '/'),
    new MenuItemModel('Cadastro', CADASTRO_ROUTE),
    new MenuItemModel('Alunos', ALUNOS_ROUTE),
    new MenuItemModel('Horários', HORARIOS_ROUTE),
    new MenuItemModel('Vendas', VENDAS_ROUTE),
    new MenuItemModel('Compras', COMPRAS_ROUTE),
    new MenuItemModel('Caixa', CAIXA_ROUTE),
    new MenuItemModel('Sistema', SISTEMA_ROUTE),
    new MenuItemModel('Relatórios', RELATORIOS_ROUTE),
    new MenuItemModel('Ajuda', AJUDA_ROUTE),
    new MenuItemModel('Sair', SAIR_ROUTE)
];

function App() {
    return <AppRoutes>
        <Menu menus={menus}></Menu>
    </AppRoutes>
}

export default App