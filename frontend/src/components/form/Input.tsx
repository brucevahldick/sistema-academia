interface Props {
    placeholder: string,
    inputId: string,
    type: string,
    additionalClass?: string,
    style?: {},
    value: string,
    handleChange?: any
}

function Input({placeholder, inputId, type, additionalClass, style, value, handleChange}: Props) {
    return <input type={type} className={"form-control " + additionalClass} id={inputId} name={inputId}
                  placeholder={placeholder} style={style} value={value} onChange={handleChange}/>
}

export default Input