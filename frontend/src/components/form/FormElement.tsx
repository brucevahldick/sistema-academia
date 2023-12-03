import {FormEvent, ReactNode} from "react";
import Button, {ButtonTypes} from "../general/Button.tsx";

interface Props {
    children: ReactNode,
    onSubmitFunction: (event: FormEvent) => void
}

function FormElement({children, onSubmitFunction}: Props) {
    return <div className="container system-container">
        <form onSubmit={(event) => onSubmitFunction(event)}>
            {children}
            <div className="system-form-buttons">
                <Button title="Enviar" type={ButtonTypes.Submit} additionalClasses="btn-outline-success"/>
                <Button title="Limpar" type={ButtonTypes.Reset} additionalClasses="btn-outline-danger"/>
            </div>
        </form>
    </div>
}

export default FormElement