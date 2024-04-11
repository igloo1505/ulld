import clsx from 'clsx'
import React from 'react'



interface LeadTextProps {
    children: string
    center?: boolean
}

export const LeadText = ({ children, center }: LeadTextProps) => {
    return (
        <p className={clsx("text-xl text-muted-foreground", center && "w-full text-center")}>{children}</p>
    )
}


LeadText.displayName = "LeadText"
