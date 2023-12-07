import AtividadesForm from "./AtividadesForm.tsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {findAtividadeById} from "../../service/AtividadeService.ts";
import Atividade from "../../model/Atividade.ts";

function AtividadesEdit() {
    const {id} = useParams();
    const [atividade, setAtividade] = useState<Atividade | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            const result = await findAtividadeById(id);
            setAtividade(result);
        };
        fetchData();
    }, [id]);
    if (!atividade) {
        return <div>Loading...</div>;
    }
    return <AtividadesForm atividade={atividade}/>
}

export default AtividadesEdit