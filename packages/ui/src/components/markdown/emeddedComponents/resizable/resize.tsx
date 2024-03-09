import React, { useId } from 'react'
import { ResizePanel } from './resizePanel';
import ResizeGroupListener from './panelListener';



interface ResizeContainerProps {

}

const getColumns = (n: number) => {
    let a = []
    for (var i = 0; i < n; i++) {
        a.push("auto")
    }
    return a.join(" 16px ")
}

export const ResizeContainer = (props: ResizeContainerProps) => {
    const id = useId()
    const cols = getColumns(2)

    return (
        <div
            id={id}
            className={"w-full h-full"}
            style={{
                display: "grid",
                gridTemplateColumns: cols
            }}
        >
            <ResizeGroupListener containerId={id} />
            <ResizePanel min={300}>
                Panel one
            </ResizePanel>
            <ResizePanel min={300}>
                Panel two
            </ResizePanel>
        </div>
    )

}


ResizeContainer.displayName = "ResizeContainer"
