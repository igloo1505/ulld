"use client"
import React from 'react'
import { H4 } from '../heading'



interface TikzPlaceholderProps {
    id: string
}

export const TikzPlaceholder = ({ id }: TikzPlaceholderProps) => {
    return (
        <div
            className={"w-full h-fit text-center flex-col justify-center items-center gap-3 px-4 py-3 rounded border my-4 hidden group-[.isOffline]/html:flex"}
            id={`${id}-placeholder`}
        >
            <H4>Tikz Diagram</H4>
            <p>This might not render offline.</p>
        </div>
    )
}


TikzPlaceholder.displayName = "TikzPlaceholder"
