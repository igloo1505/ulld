import React, { ReactNode } from 'react'



interface SidebarSectionTitleProps {
children: ReactNode
}

const SidebarSectionTitle = ({children}: SidebarSectionTitleProps) => {
return (
        <h4 className={"text-semibold text-foreground mb-3"}>
            {children}
        </h4>
)
}


SidebarSectionTitle.displayName = "SidebarSectionTitle"


export default SidebarSectionTitle;
