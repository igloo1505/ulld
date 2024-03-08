import clsx from 'clsx'
import React from 'react'



interface CenterFullSizeProps {
    children: React.ReactNode
    className?: string
    start?: boolean
}

const CenterFullSize = ({ children, start, className }: CenterFullSizeProps) => {
    return (
        <div className={clsx("w-full h-full grid place-items-center", start && "flex flex-col justify-start items-center pt-8", className && className)}>{children}</div>
    )
}


CenterFullSize.displayName = "CenterFullSize"


export default CenterFullSize;
