import cn from '@ulld/utilities/cn'
import React, { ReactNode } from 'react'



interface CardLabelTextProps {
  children: ReactNode
    className?: string
}

const CardLabelText = ({children, className}: CardLabelTextProps) => {
return (
    <div className={cn("", className)}>{children}</div>
)
}


CardLabelText.displayName = "CardLabelText"


export default CardLabelText;
