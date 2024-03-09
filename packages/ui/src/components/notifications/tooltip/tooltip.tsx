"use client"
import React from 'react'
import { TooltipProvider, TooltipContent, TooltipTrigger, Tooltip as ShadTooltip } from '@ulld/tailwind/base';


interface TooltipProps {
    children: React.ReactNode
    content: string | React.ReactNode
    disable?: boolean
}

export const ComposedTooltip = ({ children, content, disable }: TooltipProps) => {
    if (disable) {
        return children
    }
    return (
        <TooltipProvider>
            <ShadTooltip>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent className={"group-[noTooltips]/html:hidden"}>
                    {content}
                </TooltipContent>
            </ShadTooltip>
        </TooltipProvider>
    )
}


ComposedTooltip.displayName = "Tooltip"
