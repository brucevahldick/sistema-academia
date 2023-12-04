class Endereco {
    private _estado: string;
    private _cidade: string;
    private _rua: string;
    private _cep: string;
    private _numero: number;
    private _bairro: string;

    constructor(estado: string, cidade: string, rua: string, cep: string, numero: number, bairro: string) {
        this._estado = estado;
        this._cidade = cidade;
        this._rua = rua;
        this._cep = cep;
        this._numero = numero;
        this._bairro = bairro;
    }

    get estado(): string {
        return this._estado;
    }

    get cidade(): string {
        return this._cidade;
    }

    get rua(): string {
        return this._rua;
    }

    get cep(): string {
        return this._cep;
    }

    get numero(): number {
        return this._numero;
    }

    get bairro(): string {
        return this._bairro;
    }

    set estado(value: string) {
        this._estado = value;
    }

    set cidade(value: string) {
        this._cidade = value;
    }

    set rua(value: string) {
        this._rua = value;
    }

    set cep(value: string) {
        this._cep = value;
    }

    set numero(value: number) {
        this._numero = value;
    }

    set bairro(value: string) {
        this._bairro = value;
    }
}

export default Endereco;