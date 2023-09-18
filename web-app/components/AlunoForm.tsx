import Row from "./Row";
import FormGroup from "./form/FormGroup";
import Input from "./form/Input";
import Select from "./form/Select";
import Checkbox from "./form/Checkbox";
import FormElement from "./form/FormElement";
import {FormEvent} from "react";
import SelectOption from "./model/SelectOption";
import Aluno from "./model/Aluno";

const handleSubmit = function (event: FormEvent) {
    // envia o formulário
};

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

function AlunoForm({aluno}: Props) {
    return <FormElement onSubmitFunction={handleSubmit}>
        <Row>
            <FormGroup labelName="Nome" formGroupClass="col">
                <Input placeholder="Nome" inputId="inputNome" type="text" value=""/>
            </FormGroup>
        </Row>
        <Row>
            <FormGroup labelName="Data de Nascimento" formGroupClass="col-md-6">
                <Input placeholder="Data de Nascimento" inputId="inputDataNascimento" type="date" value=""/>
            </FormGroup>
            <FormGroup labelName="Sexo" formGroupClass="col-md-3">
                <Select inputId="inputSexo" options={optionsSexo} value=""/>
            </FormGroup>
            <FormGroup labelName="Ativo" formGroupClass="col-md-3">
                <Checkbox inputId="inputAtivo" checkboxSelecionado="O usuário está ativo"
                          checkboxNaoSelecionado="O usuário não está ativo" value={false}/>
            </FormGroup>
        </Row>
        <Row rowTitle="Contato">
            <FormGroup labelName="E-mail" formGroupClass="col">
                <Input placeholder="E-mail" inputId="inputEmail" type="email" value=""/>
            </FormGroup>
        </Row>
        <Row>
            <FormGroup labelName="Fone" formGroupClass="col">
                <Input placeholder="Fone" inputId="inputFone" type="tel" value=""/>
            </FormGroup>
            <FormGroup labelName="Celular" formGroupClass="col">
                <Input placeholder="Celular" inputId="inputCelular" type="tel" value=""/>
            </FormGroup>
        </Row>
        <Row rowTitle="Endereço">
            <FormGroup labelName="CEP" formGroupClass="col-md-4">
                <Input placeholder="CEP" inputId="inputCEP" type="text" value=""/>
            </FormGroup>
            <FormGroup labelName="Cidade/Estado" formGroupClass="col-md-8">
                <div className="input-group">
                    <Input placeholder="Cidade" inputId="inputCidade" type="text" value=""/>
                    <span className="input-group-text">/</span>
                    <Select inputId="inputUF" options={brazilianStates} value=""/>
                </div>
            </FormGroup>
        </Row>
        <Row>
            <FormGroup labelName="Rua - Número" formGroupClass="col-md-8">
                <div className="input-group">
                    <Input placeholder="Rua" inputId="inputRua" type="text" value="" style={{width: "50%"}}/>
                    <span className="input-group-text">-</span>
                    <Input placeholder="Número" inputId="inputNumero" type="number" value=""/>
                </div>
            </FormGroup>
            <FormGroup labelName="Bairro" formGroupClass="col-md-4">
                <Input placeholder="Bairro" inputId="inputBairro" type="text" value=""/>
            </FormGroup>
        </Row>
    </FormElement>
}

export default AlunoForm