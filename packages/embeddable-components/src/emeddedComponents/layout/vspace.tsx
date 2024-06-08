import React from 'react'
import { VSpaceProps } from './vspaceProps'




export const VSpace = ({ height }: VSpaceProps) => {
    let h = height || 16
    return (
        <div
            className={"w-full"}
            style={{
                height: typeof h === "number" ? `${h}px` : h
            }} />
    )
}


VSpace.displayName = "VSpace"
