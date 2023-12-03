import {ReactNode} from "react";

interface Props {
    children: ReactNode,
    rowTitle?: string
}

function Row({children, rowTitle}: Props) {
    return <div className="row system-row">
        {rowTitle && <>
            <h3 className="text-white system-row-title">{rowTitle}</h3>
            <hr/>
        </>}
        {children}
    </div>
}

export default Row