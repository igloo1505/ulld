import clsx from 'clsx'
import React from 'react'



interface SideMenuDisplayContainerProps {
    center?: boolean
    children: React.ReactNode
}

const SideMenuDisplayContainer = ({ center, children }: SideMenuDisplayContainerProps) => {
    return (
        <div className={clsx("w-full h-full flex flex-col items-center", center ? "justify-center" : "justify-start")}>
            {children}
        </div>
    )
}


SideMenuDisplayContainer.displayName = "SideMenuDisplayContainer"


export default SideMenuDisplayContainer;
