import Aluno from "../../model/Aluno.ts";
import FormElement from "../form/FormElement.tsx";
import SelectOption from "../../model/SelectOption.ts";
import React, {FormEvent, useState} from "react";
import Row from "../general/Row.tsx";
import FormGroup from "../form/FormGroup.tsx";
import Input from "../form/Input.tsx";
import Select from "../form/Select.tsx";
import Checkbox from "../form/Checkbox.tsx";
import {makeApiPostCall, makeApiPutCall} from "../../service/ApiCall.ts";
import {AxiosResponse} from "axios";
import {PORTA_ALUNO} from "../../service/PessoaService.ts";
import {useNavigate} from "react-router-dom";
import {EDITAR_ALUNO_ROUTE} from "../../AppRoutes.tsx";

const optionsSexo = [
    new SelectOption('masculino', 'Masculino'),
    new SelectOption('feminino', 'Feminino'),
    new SelectOption('outro', 'Outro')
];

const brazilianStates = [
    new SelectOption('AC', 'Acre (AC)'),
    new SelectOption('AL', 'Alagoas (AL)'),
    new SelectOption('AP', 'Amapá (AP)'),
    new SelectOption('AM', 'Amazonas (AM)'),
    new SelectOption('BA', 'Bahia (BA)'),
    new SelectOption('CE', 'Ceará (CE)'),
    new SelectOption('DF', 'Distrito Federal (DF)'),
    new SelectOption('ES', 'Espírito Santo (ES)'),
    new SelectOption('GO', 'Goiás (GO)'),
    new SelectOption('MA', 'Maranhão (MA)'),
    new SelectOption('MT', 'Mato Grosso (MT)'),
    new SelectOption('MS', 'Mato Grosso do Sul (MS)'),
    new SelectOption('MG', 'Minas Gerais (MG)'),
    new SelectOption('PA', 'Pará (PA)'),
    new SelectOption('PB', 'Paraíba (PB)'),
    new SelectOption('PR', 'Paraná (PR)'),
    new SelectOption('PE', 'Pernambuco (PE)'),
    new SelectOption('PI', 'Piauí (PI)'),
    new SelectOption('RJ', 'Rio de Janeiro (RJ)'),
    new SelectOption('RN', 'Rio Grande do Norte (RN)'),
    new SelectOption('RS', 'Rio Grande do Sul (RS)'),
    new SelectOption('RO', 'Rondônia (RO)'),
    new SelectOption('RR', 'Roraima (RR)'),
    new SelectOption('SC', 'Santa Catarina (SC)'),
    new SelectOption('SP', 'São Paulo (SP)'),
    new SelectOption('SE', 'Sergipe (SE)'),
    new SelectOption('TO', 'Tocantins (TO)'),
];

interface Props {
    aluno?: Aluno,
    readonly?: boolean
}

function AlunosForm({aluno, readonly}: Props) {

    const [formValues, setFormValues] = useState({
        inputId: aluno?.id || 0,
        inputNome: aluno?.nome || '',
        inputDataNascimento: aluno?.dataNascimento.toISOString() || '',
        inputSexo: aluno?.sexo || '',
        inputAtivo: aluno?.ativo || false,
        inputEmail: aluno?.email || '',
        inputFone: aluno?.fone || '',
        inputCelular: aluno?.celular || '',
        inputCEP: aluno?.endereco.cep || '',
        inputCidade: aluno?.endereco.cidade || '',
        inputUF: aluno?.endereco.estado || '',
        inputRua: aluno?.endereco.rua || '',
        inputNumero: aluno?.endereco.numero || '',
        inputBairro: aluno?.endereco.bairro || ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        // @ts-ignore
        const {name, value, type, checked} = event.currentTarget;
        const newValue = type === 'checkbox' ? checked : value;
        setFormValues((prevFormValues) => ({...prevFormValues, [name]: newValue}));
    };

    const handleSuccess = async (response: AxiosResponse) => {
        const pessoaId = response.data.params[0].valor;
        const navigate = useNavigate();
        navigate(EDITAR_ALUNO_ROUTE + `/${pessoaId}`);
    }

    const handleError = (error: any) => {
        return error;
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        if (formValues.inputId) {
            if (window.confirm("Deseja editar o aluno " + formValues.inputNome + "?")) {
                makeApiPostCall(PORTA_ALUNO, handleSuccess, handleError, formValues)
            }
        } else {
            makeApiPutCall(PORTA_ALUNO, handleSuccess, handleError, formValues)
        }
    };

    return <FormElement readonly={readonly || false} onSubmitFunction={handleSubmit}>
        <Row>
            <FormGroup labelName={(formValues.inputId) ? "ID" : ""} formGroupClass="col">
                <Input placeholder={''} inputId="inputId" type={(formValues.inputId) ? "text" : "hidden"}
                       value={formValues.inputId.toString()}
                       readonly={true}/>
            </FormGroup>
        </Row>
        <Row>
            <FormGroup labelName="Nome" formGroupClass="col">
                <Input handleChange={handleChange} placeholder="Nome" inputId="inputNome" type="text"
                       value={formValues.inputNome} readonly={readonly || false}/>
            </FormGroup>
        </Row>
        <Row>
            <FormGroup labelName="Data de Nascimento" formGroupClass="col-md-6">
                <Input handleChange={handleChange} placeholder="Data de Nascimento" inputId="inputDataNascimento"
                       type="date" value={formValues.inputDataNascimento} readonly={readonly || false}/>
            </FormGroup>
            <FormGroup labelName="Sexo" formGroupClass="col-md-3">
                <Select handleChange={handleChange} inputId="inputSexo" options={optionsSexo}
                        value={formValues.inputSexo} readonly={readonly || false}/>
            </FormGroup>
            <FormGroup labelName="Ativo" formGroupClass="col-md-3">
                <Checkbox handleChange={handleChange} inputId="inputAtivo" checkboxSelecionado="O usuário está ativo"
                          checkboxNaoSelecionado="O usuário não está ativo" value={formValues.inputAtivo}
                          readonly={readonly || false}/>
            </FormGroup>
        </Row>
        <Row rowTitle="Contato">
            <FormGroup labelName="E-mail" formGroupClass="col">
                <Input handleChange={handleChange} placeholder="E-mail" inputId="inputEmail" type="email"
                       value={formValues.inputEmail} readonly={readonly || false}/>
            </FormGroup>
        </Row>
        <Row>
            <FormGroup labelName="Fone" formGroupClass="col">
                <Input handleChange={handleChange} placeholder="Fone" inputId="inputFone" type="tel"
                       value={formValues.inputFone} readonly={readonly || false}/>
            </FormGroup>
            <FormGroup labelName="Celular" formGroupClass="col">
                <Input handleChange={handleChange} placeholder="Celular" inputId="inputCelular" type="tel"
                       value={formValues.inputCelular} readonly={readonly || false}/>
            </FormGroup>
        </Row>
        <Row rowTitle="Endereço">
            <FormGroup labelName="CEP" formGroupClass="col-md-4">
                <Input handleChange={handleChange} placeholder="CEP" inputId="inputCEP" type="text"
                       value={formValues.inputCEP} readonly={readonly || false}/>
            </FormGroup>
            <FormGroup labelName="Cidade/Estado" formGroupClass="col-md-8">
                <div className="input-group">
                    <Input handleChange={handleChange} placeholder="Cidade" inputId="inputCidade" type="text"
                           value={formValues.inputCidade} readonly={readonly || false}/>
                    <span className="input-group-text">/</span>
                    <Select handleChange={handleChange} inputId="inputUF" options={brazilianStates}
                            value={formValues.inputUF} readonly={readonly || false}/>
                </div>
            </FormGroup>
        </Row>
        <Row>
            <FormGroup labelName="Rua - Número" formGroupClass="col-md-8">
                <div className="input-group">
                    <Input handleChange={handleChange} placeholder="Rua" inputId="inputRua" type="text"
                           value={formValues.inputRua}
                           style={{width: "50%"}} readonly={readonly || false}/>
                    <span className="input-group-text">-</span>
                    <Input handleChange={handleChange} placeholder="Número" inputId="inputNumero" type="number"
                           value={formValues.inputNumero.toString()} readonly={readonly || false}/>
                </div>
            </FormGroup>
            <FormGroup labelName="Bairro" formGroupClass="col-md-4">
                <Input handleChange={handleChange} placeholder="Bairro" inputId="inputBairro" type="text"
                       value={formValues.inputBairro} readonly={readonly || false}/>
            </FormGroup>
        </Row>
    </FormElement>
}

export default AlunosForm