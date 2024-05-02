import React from 'react'



interface WithSidebarProps {
    children: React.ReactNode
}

export const WithSidebar = ({ children }: WithSidebarProps) => {
    return (
        <div className={"h-fit w-full my-2 grid grid-cols-[2fr_1fr] gap-2 md:gap-4"}>{children}</div>
    )
}


WithSidebar.displayName = "WithSidebar"
