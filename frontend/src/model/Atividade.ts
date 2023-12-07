class Atividade {
    private _id: number;
    private _nome: string;
    private _duracaoMinutos: number;

    constructor(id: number, nome: string, duracaoMinutos: number) {
        this._id = id;
        this._nome = nome;
        this._duracaoMinutos = duracaoMinutos;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(value: string) {
        this._nome = value;
    }

    get duracaoMinutos(): number {
        return this._duracaoMinutos;
    }

    set duracaoMinutos(value: number) {
        this._duracaoMinutos = value;
    }
}

export default Atividade