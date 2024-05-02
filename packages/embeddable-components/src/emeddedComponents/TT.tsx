import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@ulld/tailwind/tooltip'
import React from 'react'



interface TTProps {
    content: React.ReactNode
    children: React.ReactNode
}


export const TT = ({ children, content }: TTProps) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent>
                    {content}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}


TT.displayName = "TT"
