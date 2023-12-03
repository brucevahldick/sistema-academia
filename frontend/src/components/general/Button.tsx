interface Props {
    title: string,
    type: any,
    onClick?: () => void,
    additionalClasses?: string
}

export const enum ButtonTypes {
    Submit = "submit",
    Reset = "reset",
    Button = "button"
}

function Button({title, type, onClick, additionalClasses}: Props) {
    return <button type={type} className={"btn " + additionalClasses} onClick={onClick}>
        {title}
    </button>
}

export default Button