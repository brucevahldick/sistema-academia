import Aluno from "../../model/Aluno.ts";
import FormElement from "../form/FormElement.tsx";
import SelectOption from "../../model/SelectOption.ts";
import React, {FormEvent, useState} from "react";
import Row from "../general/Row.tsx";
import FormGroup from "../form/FormGroup.tsx";
import Input from "../form/Input.tsx";
import Select from "../form/Select.tsx";
import Checkbox from "../form/Checkbox.tsx";
import {makeApiPutCall} from "../../service/ApiCall.ts";
import {AxiosResponse} from "axios";
import {findPessoaById} from "../../service/PessoaService.ts";

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
    aluno?: Aluno
}

function AlunosForm({aluno}: Props) {

    const [formValues, setFormValues] = useState({
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
        const pessoa = await findPessoaById(pessoaId);
        if (pessoa instanceof Aluno) {
            return <AlunosForm aluno={pessoa}/>
        }
    }

    const handleError = (error: any) => {
        return error;
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        makeApiPutCall('/pessoas/aluno', handleSuccess, handleError, formValues)
    };

    return <FormElement onSubmitFunction={handleSubmit}>
        <Row>
            <FormGroup labelName="Nome" formGroupClass="col">
                <Input handleChange={handleChange} placeholder="Nome" inputId="inputNome" type="text"
                       value={formValues.inputNome}/>
            </FormGroup>
        </Row>
        <Row>
            <FormGroup labelName="Data de Nascimento" formGroupClass="col-md-6">
                <Input handleChange={handleChange} placeholder="Data de Nascimento" inputId="inputDataNascimento"
                       type="date" value={formValues.inputDataNascimento}/>
            </FormGroup>
            <FormGroup labelName="Sexo" formGroupClass="col-md-3">
                <Select handleChange={handleChange} inputId="inputSexo" options={optionsSexo}
                        value={formValues.inputSexo}/>
            </FormGroup>
            <FormGroup labelName="Ativo" formGroupClass="col-md-3">
                <Checkbox handleChange={handleChange} inputId="inputAtivo" checkboxSelecionado="O usuário está ativo"
                          checkboxNaoSelecionado="O usuário não está ativo" value={formValues.inputAtivo}/>
            </FormGroup>
        </Row>
        <Row rowTitle="Contato">
            <FormGroup labelName="E-mail" formGroupClass="col">
                <Input handleChange={handleChange} placeholder="E-mail" inputId="inputEmail" type="email"
                       value={formValues.inputEmail}/>
            </FormGroup>
        </Row>
        <Row>
            <FormGroup labelName="Fone" formGroupClass="col">
                <Input handleChange={handleChange} placeholder="Fone" inputId="inputFone" type="tel"
                       value={formValues.inputFone}/>
            </FormGroup>
            <FormGroup labelName="Celular" formGroupClass="col">
                <Input handleChange={handleChange} placeholder="Celular" inputId="inputCelular" type="tel"
                       value={formValues.inputCelular}/>
            </FormGroup>
        </Row>
        <Row rowTitle="Endereço">
            <FormGroup labelName="CEP" formGroupClass="col-md-4">
                <Input handleChange={handleChange} placeholder="CEP" inputId="inputCEP" type="text"
                       value={formValues.inputCEP}/>
            </FormGroup>
            <FormGroup labelName="Cidade/Estado" formGroupClass="col-md-8">
                <div className="input-group">
                    <Input handleChange={handleChange} placeholder="Cidade" inputId="inputCidade" type="text"
                           value={formValues.inputCidade}/>
                    <span className="input-group-text">/</span>
                    <Select handleChange={handleChange} inputId="inputUF" options={brazilianStates}
                            value={formValues.inputUF}/>
                </div>
            </FormGroup>
        </Row>
        <Row>
            <FormGroup labelName="Rua - Número" formGroupClass="col-md-8">
                <div className="input-group">
                    <Input handleChange={handleChange} placeholder="Rua" inputId="inputRua" type="text"
                           value={formValues.inputRua}
                           style={{width: "50%"}}/>
                    <span className="input-group-text">-</span>
                    <Input handleChange={handleChange} placeholder="Número" inputId="inputNumero" type="number"
                           value={formValues.inputNumero.toString()}/>
                </div>
            </FormGroup>
            <FormGroup labelName="Bairro" formGroupClass="col-md-4">
                <Input handleChange={handleChange} placeholder="Bairro" inputId="inputBairro" type="text"
                       value={formValues.inputBairro}/>
            </FormGroup>
        </Row>
    </FormElement>
}

export default AlunosForm