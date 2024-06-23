import clsx from 'clsx'
import React from 'react'
import { LeadTextProps } from './leadProps'


export const LeadText = ({ children, center, className }: LeadTextProps & {className?: string}) => {
    return (
        <p className={clsx("text-xl text-muted-foreground", center && "w-full text-center", className)}>{children}</p>
    )
}


LeadText.displayName = "LeadText"
