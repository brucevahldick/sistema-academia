interface Props {
    placeholder: string,
    inputId: string,
    type: string,
    additionalClass?: string,
    style?: {},
    value: string
}

function Input({placeholder, inputId, type, additionalClass, style, value}: Props) {
    return <input type={type} className={"form-control " + additionalClass} id={inputId} name={inputId}
                  placeholder={placeholder} style={style}/>
}

export default Input