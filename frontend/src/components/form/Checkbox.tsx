interface Props {
    inputId: string,
    checkboxSelecionado?: string,
    checkboxNaoSelecionado?: string,
    value: boolean,
    handleChange: any,
    readonly: boolean
}

function Checkbox({inputId, checkboxSelecionado, checkboxNaoSelecionado, value, handleChange, readonly}: Props) {
    return <div className="form-check">
        <input checked={value} type="checkbox" className="form-check-input" id={inputId}
               onChange={handleChange} name={inputId} readOnly={readonly}/>
        <label htmlFor={inputId}
               className="form-check-label">{value ? checkboxSelecionado : checkboxNaoSelecionado}</label>
    </div>
}

export default Checkbox