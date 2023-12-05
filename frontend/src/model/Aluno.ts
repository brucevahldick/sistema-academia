import Endereco from "./Endereco";

class Aluno {
    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    private _id: number
    private _codigo: string;
    private _nome: string;
    private _dataNascimento: Date;
    private _sexo: string;
    private _ativo: boolean;
    private _fone: string;
    private _celular: string;
    private _email: string;
    private _endereco: Endereco;

    constructor(id: number, codigo: string, nome: string, dataNascimento: Date, sexo: string, ativo: boolean, fone: string, celular: string, email: string, endereco: Endereco) {
        this._id = id;
        this._codigo = codigo;
        this._nome = nome;
        this._dataNascimento = dataNascimento;
        this._sexo = sexo;
        this._ativo = ativo;
        this._fone = fone;
        this._celular = celular;
        this._email = email;
        this._endereco = endereco;
    }

    get codigo(): string {
        return this._codigo;
    }

    set codigo(value: string) {
        this._codigo = value;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(value: string) {
        this._nome = value;
    }

    get dataNascimento(): Date {
        return this._dataNascimento;
    }

    set dataNascimento(value: Date) {
        this._dataNascimento = value;
    }

    get sexo(): string {
        return this._sexo;
    }

    set sexo(value: string) {
        this._sexo = value;
    }

    get ativo(): boolean {
        return this._ativo;
    }

    set ativo(value: boolean) {
        this._ativo = value;
    }

    get fone(): string {
        return this._fone;
    }

    set fone(value: string) {
        this._fone = value;
    }

    get celular(): string {
        return this._celular;
    }

    set celular(value: string) {
        this._celular = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get endereco(): Endereco {
        return this._endereco;
    }

    set endereco(value: Endereco) {
        this._endereco = value;
    }
}

export default Aluno