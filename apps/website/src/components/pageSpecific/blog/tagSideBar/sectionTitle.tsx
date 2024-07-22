import React, { ReactNode } from 'react'
import {cn} from "@ulld/utilities/cn"


interface SidebarSectionTitleProps {
children: ReactNode
    className?: string
}


const SidebarSectionTitle = ({children, className}: SidebarSectionTitleProps) => {
return (
        <h4 className={cn("text-semibold text-foreground mb-3", className)}>
            {children}
        </h4>
)
}


SidebarSectionTitle.displayName = "SidebarSectionTitle"


export default SidebarSectionTitle;
