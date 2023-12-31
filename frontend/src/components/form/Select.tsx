import SelectOption from "../../model/SelectOption.ts";

interface Props {
    inputId: string,
    options: SelectOption[],
    value: string,
    handleChange: any,
    readonly: boolean
}

function Select({inputId, options, value, handleChange, readonly}: Props) {
    return <select onChange={handleChange} id={inputId} className="form-select" aria-label="Default select example"
                   name={inputId} value={value} aria-readonly={readonly}>
        <option value="" disabled>Selecione:</option>
        {options.map((option, index) => <option key={index} value={option.value}>{option.nome}</option>)}
    </select>
}

export default Select