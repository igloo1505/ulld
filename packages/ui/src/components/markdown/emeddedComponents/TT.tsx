import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '#/components/shad/ui/tooltip'
import React from 'react'



interface TTProps {
    content: React.ReactNode
    children: React.ReactNode
}


const TT = ({ children, content }: TTProps) => {
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


export default TT;
