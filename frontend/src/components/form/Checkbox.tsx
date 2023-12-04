interface Props {
    inputId: string,
    checkboxSelecionado?: string,
    checkboxNaoSelecionado?: string,
    value: boolean,
    handleChange: any
}

function Checkbox({inputId, checkboxSelecionado, checkboxNaoSelecionado, value, handleChange}: Props) {
    return <div className="form-check">
        <input checked={value} type="checkbox" className="form-check-input" id={inputId}
               onChange={handleChange} name={inputId}/>
        <label htmlFor={inputId}
               className="form-check-label">{value ? checkboxSelecionado : checkboxNaoSelecionado}</label>
    </div>
}

export default Checkbox