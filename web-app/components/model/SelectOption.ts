class SelectOption {
    private _value: string;
    private _nome: string;

    constructor(value: string, nome: string) {
        this._value = value;
        this._nome = nome;
    }

    get value(): string {
        return this._value;
    }

    set value(value: string) {
        this._value = value;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(value: string) {
        this._nome = value;
    }
}

export default SelectOption