import {ReactNode} from "react";

interface Props {
    labelName: string,
    formGroupClass: string,
    children: ReactNode
}

function FormGroup({labelName, formGroupClass, children}: Props) {
    return <div className={formGroupClass}>
        <label className="form-label">{labelName}</label>
        {children}
    </div>
}

export default FormGroup