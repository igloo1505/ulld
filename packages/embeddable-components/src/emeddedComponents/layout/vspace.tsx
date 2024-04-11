import React from 'react'



interface VSpaceProps {
    height: number | string
}

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
