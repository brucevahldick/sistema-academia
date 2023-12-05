import {useParams} from "react-router-dom";
import {findPessoaById} from "../../service/PessoaService.ts";
import AlunosForm from "./AlunosForm.tsx";
import {useEffect, useState} from "react";
import Aluno from "../../model/Aluno.ts";

function AlunosEdit() {
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
    return <AlunosForm showId={true} aluno={aluno}/>
}

export default AlunosEdit