import clsx from 'clsx'
import React from 'react'



interface DivElementProps {
    children: React.ReactNode
    wFull?: boolean
    hFull?: boolean
    muted?: boolean
    error?: boolean
    danger?: boolean
    class?: string
    tight?: boolean
    block?: boolean
    classOnly?: boolean
}

export const DivElement = ({ children, block, classOnly, tight, error, danger, wFull, hFull, muted, class: _class }: DivElementProps) => {
    return (
        <div
            className={classOnly ? _class : clsx(
                "rounded-md mx-2 md:mx-4 mb-3 h-fit",
                wFull ? "w-full" : "w-fit",
                hFull ? "h-full" : "h-fit",
                tight ? "p-1" : "p-4",
                block ? "block" : "inline-block",
                muted && "bg-muted text-muted-foreground",
                Boolean(error || danger) && "bg-destructive text-destructive-foreground",
                _class && _class
            )}
        >{children}</div>
    )
}


DivElement.displayName = "DivElement"
