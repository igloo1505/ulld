import cn from '@ulld/utilities/cn'
import React, { HTMLProps, ReactNode } from 'react'



interface CardMutedDescProps extends HTMLProps<HTMLDivElement> {
   children: ReactNode
}

const CardMutedDesc = ({children, className, ...props}: CardMutedDescProps) => {
return (
    <div {...props} className={cn("text-[10px] text-muted-foreground absolute top-4 left-4", className)}>{children}</div>
)
}


CardMutedDesc.displayName = "CardMutedDesc"


export default CardMutedDesc;
