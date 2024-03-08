"use client"
import React, { useState } from 'react'



interface SplitScreenComponentProps {
    children: [React.ReactNode, React.ReactNode]
}

/* TODO: Handle this... probably with a dragable library to speed things up. */
const SplitScreenComponent = ({ children }: SplitScreenComponentProps) => {
    const [columns, setColumns] = useState(`1fr 1fr`)
    if (children.length !== 2) {
        console.log(`${children.length} children were passed to the SplitScreen component. This component needs exactly 2 children. Wrap them with divs as <div>1</div> and <div>2</div> or any other DOM element to group them appropriately.`)
        return null
    }
    return (
        <div className={"w-full h-fit grid"} style={{
            gridTemplateColumns: columns
        }}>
            <div className={""}>{children[0]}</div>
            <div className={""}>{children[1]}</div>
        </div>
    )
}


SplitScreenComponent.displayName = "SplitScreenComponent"


export default SplitScreenComponent;
