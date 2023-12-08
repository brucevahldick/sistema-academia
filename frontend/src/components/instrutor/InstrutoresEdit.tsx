import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Aluno from "../../model/Aluno.ts";
import {findPessoaById} from "../../service/PessoaService.ts";
import InstrutoresForm from "./InstrutoresForm.tsx";

function InstrutoresEdit() {
    const {id} = useParams();
    const [aluno, setAluno] = useState<Aluno | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            const result = await findPessoaById(id);
            setAluno(result);
        };
        fetchData();
    }, [id]);
    if (!aluno) {
        return <div>Loading...</div>;
    }
    return <InstrutoresForm aluno={aluno}/>
}

export default InstrutoresEdit