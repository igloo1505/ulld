import clsx from 'clsx'
import React from 'react'



interface SidebarProps {
    children: React.ReactNode
    class?: string
    left?: boolean
}

export const Sidebar = ({ children, left, class: _class }: SidebarProps) => {
    return (
        <div className={clsx("w-full lg:w-[33%]", left ? "lg:float-left lg:mr-4" : "lg:float-right lg:ml-4")}>
            {children}
        </div>
    )
}


Sidebar.displayName = "Sidebar"
