import clsx from 'clsx'
import React from 'react'
import { LeadTextProps } from './leadProps'




export const LeadText = ({ children, center }: LeadTextProps) => {
    return (
        <p className={clsx("text-xl text-muted-foreground", center && "w-full text-center")}>{children}</p>
    )
}


LeadText.displayName = "LeadText"
