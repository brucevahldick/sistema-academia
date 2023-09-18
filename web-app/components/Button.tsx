interface Props {
    title: string,
    type: any
}

export const enum ButtonTypes {
    Submit = "submit",
    Reset = "reset",
    Button = "button"
}

function Button({title, type}: Props) {
    return <button type={type} className="btn btn-primary">
        {title}
    </button>
}

export default Button