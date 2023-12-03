import SelectOption from "../model/SelectOption";

interface Props {
    inputId: string,
    options: SelectOption[],
    value: string
}

function Select({inputId, options, value}: Props) {
    return <select id={inputId} className="form-select" aria-label="Default select example" defaultValue={value}>
        <option value="" disabled>Selecione:</option>
        {options.map((option, index) => <option key={index} value={option.value}>{option.nome}</option>)}
    </select>
}

export default Select