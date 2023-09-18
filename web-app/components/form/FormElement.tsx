import {FormEvent, ReactNode} from "react";
import Button, {ButtonTypes} from "../Button";
import Row from "../Row";

interface Props {
    children: ReactNode,
    onSubmitFunction: (event: FormEvent) => void
}

function FormElement({children, onSubmitFunction}: Props) {
    return <div className="container system-container">
        <form onSubmit={(event) => onSubmitFunction(event)}>
            {children}
            <div className="system-form-buttons">
                <Button title="Enviar" type={ButtonTypes.Submit}/>
                <Button title="Limpar" type={ButtonTypes.Reset}/>
            </div>
        </form>
    </div>
}

export default FormElement