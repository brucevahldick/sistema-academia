import {FormEvent, ReactNode} from "react";
import Button, {ButtonTypes} from "../general/Button.tsx";

interface Props {
    children: ReactNode,
    onSubmitFunction: (event: FormEvent) => void,
    readonly: boolean
}

function FormElement({children, onSubmitFunction, readonly}: Props) {
    return <div className="container system-container">
        <form onSubmit={(event) => onSubmitFunction(event)}>
            {children}
            {!readonly && (<div className="system-form-buttons">
                <Button title="Enviar" type={ButtonTypes.Submit} additionalClasses="btn-outline-success"/>
            </div>)}
        </form>
    </div>
}

export default FormElement