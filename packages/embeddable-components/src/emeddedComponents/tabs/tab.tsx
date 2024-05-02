import clsx from 'clsx'
import React from 'react'



export interface TabProps {
    children: React.ReactNode
    label: string
    title?: string
    description?: string
    index: number
}

export const Tab = ({ children, index }: TabProps) => {
    return (
        <div className={clsx("w-full h-full flex flex-col justify-center items-center p-4 tabContent", `tab-content-${index}`)}>
            <div className={""}>
                {children}
            </div>
        </div>
    )
}


Tab.displayName = "Tab"
