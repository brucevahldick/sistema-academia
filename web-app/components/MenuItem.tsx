import {Link} from "react-router-dom";

interface Props {
    nome: string,
    route: string,
    index: number,
    selected: boolean,
    onSelectedItem: (index: number) => void
}

function MenuItem({nome, route, index, selected, onSelectedItem}: Props) {
    return <li className="nav-item" key={index}>
        <Link className={"nav-link" + (selected ? " active" : "")} onClick={() => onSelectedItem(index)}
           to={route}>{nome}</Link>
    </li>
}

export default MenuItem