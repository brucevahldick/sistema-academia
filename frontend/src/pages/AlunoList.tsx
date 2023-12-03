import Aluno from "../model/Aluno.ts";
import Button, {ButtonTypes} from "../components/general/Button.tsx";

interface Props {
    alunos: Aluno[]
}

function AlunoList({alunos}: Props) {
    return <ul className="list-group-flush" style={{display: "flex", flexDirection: "column", gap: "16px"}}>
        {alunos.map((aluno, index) =>
            <li className="list-group-item" style={{display: "flex", width: "100%", justifyContent: "space-around"}}>
                <ul className="list-group list-group-horizontal">
                    <li key={index} className="list-group-item">
                        {aluno.codigo}
                    </li>
                    <li key={index} className="list-group-item">
                        {aluno.nome}
                    </li>
                    <li key={index} className="list-inline-item">
                        <Button title="Editar" type={ButtonTypes.Button}/>
                    </li>
                    <li key={index} className="list-inline-item">
                        <Button title="Excluir" type={ButtonTypes.Button}/>
                    </li>
                </ul>
            </li>)
        }
    </ul>
}

export default AlunoList