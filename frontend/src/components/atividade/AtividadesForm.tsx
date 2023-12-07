import Atividade from "../../model/Atividade.ts";
import React, {FormEvent, useState} from "react";
import FormElement from "../form/FormElement.tsx";
import {makeApiPostCall, makeApiPutCall} from "../../service/ApiCall.ts";
import {AxiosResponse} from "axios";
import {useNavigate} from "react-router-dom";
import {EDITAR_ATIVIDADE_ROUTE} from "../../AppRoutes.tsx";
import {PORTA_ATIVIDADE} from "../../service/AtividadeService.ts";
import Row from "../general/Row.tsx";
import FormGroup from "../form/FormGroup.tsx";
import Input from "../form/Input.tsx";

interface Props {
    atividade?: Atividade,
    readonly?: boolean
}

function AtividadesForm({atividade, readonly}: Props) {
    const [formValues, setFormValues] = useState({
        id: atividade?.id || 0,
        nome: atividade?.nome || '',
        duracaoMinutos: atividade?.duracaoMinutos || ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        // @ts-ignore
        const {name, value, type, checked} = event.currentTarget;
        const newValue = type === 'checkbox' ? checked : value;
        setFormValues((prevFormValues) => ({...prevFormValues, [name]: newValue}));
    };

    const handleSuccess = async (response: AxiosResponse) => {
        const atividadeId = response.data.params[0].valor;
        const navigate = useNavigate();
        navigate(EDITAR_ATIVIDADE_ROUTE + `/${atividadeId}`);
    }

    const handleError = (error: any) => {
        return error;
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        if (formValues.id) {
            if (window.confirm("Deseja editar o aluno " + formValues.nome + "?")) {
                makeApiPostCall(PORTA_ATIVIDADE, handleSuccess, handleError, formValues)
            }
        } else {
            makeApiPutCall(PORTA_ATIVIDADE, handleSuccess, handleError, formValues)
        }
    };

    return <FormElement readonly={readonly || false} onSubmitFunction={handleSubmit}>
        <Row>
            <FormGroup labelName={(formValues.id) ? 'ID' : ''} formGroupClass="col">
                <Input placeholder={''} inputId='id' type={(formValues.id) ? 'text' : 'hidden'}
                       value={formValues.id.toString()} readonly={true}/>
            </FormGroup>
        </Row>
        <Row>
            <FormGroup labelName='Nome' formGroupClass='col'>
                <Input placeholder='Nome' inputId='nome' type='text' value={formValues.nome}
                       readonly={readonly || false} handleChange={handleChange}/>
            </FormGroup>
            <FormGroup labelName='Duração em Minutos' formGroupClass='col'>
                <Input placeholder='Duração em Minutos' inputId='duracaoMinutos' type='number'
                       value={formValues.duracaoMinutos.toString()} readonly={readonly || false}
                       handleChange={handleChange}/>
            </FormGroup>
        </Row>
    </FormElement>
}

export default AtividadesForm