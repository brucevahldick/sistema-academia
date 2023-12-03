import {useState} from "react";

interface Props {
    inputId: string,
    checkboxSelecionado?: string,
    checkboxNaoSelecionado?: string,
    value: boolean
}

function Checkbox({inputId, checkboxSelecionado, checkboxNaoSelecionado, value}: Props) {
    const [checkboxValue, setCheckboxValue] = useState(value);
    return <div className="form-check">
        <input checked={checkboxValue} type="checkbox" className="form-check-input" id={inputId}
               onChange={(event) => setCheckboxValue(event.target.checked)}/>
        <label htmlFor={inputId}
               className="form-check-label">{checkboxValue ? checkboxSelecionado : checkboxNaoSelecionado}</label>
    </div>
}

export default Checkbox