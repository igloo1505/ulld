import cn from '@ulld/utilities/cn'
import React, { ReactNode } from 'react'



interface MobileSheetDescProps {
   children: ReactNode
    className?: string
}

export const MobileSheetDesc = ({children, className}: MobileSheetDescProps) => {
return (
    <div className={cn("text-sm text-muted-foreground", className)}>{children}</div>
)
}


MobileSheetDesc.displayName = "MobileSheetDesc"
