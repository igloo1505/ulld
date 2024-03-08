import clsx from 'clsx'
import React from 'react'


interface SideMenuParentProps {
    children: React.ReactNode
    className?: string
}

const SideMenuParent = ({ children, className }: SideMenuParentProps) => {
    return (
        <div className={clsx("w-full grid grid-cols-1 md:grid-cols-[350px_1fr] gap-5 py-6", className)}>
            {children}
        </div>
    )
}


SideMenuParent.displayName = "SideMenuParent"


export default SideMenuParent;
