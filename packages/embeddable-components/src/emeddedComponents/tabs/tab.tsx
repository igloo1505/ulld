import clsx from 'clsx'
import React from 'react'
import { TabProps } from './props'




export const Tab = ({ children, index }: TabProps & { index: number }) => {
    return (
        <div className={clsx("w-full h-full flex flex-col justify-center items-center p-4 tabContent", `tab-content-${index}`)}>
            <div className={""}>
                {children}
            </div>
        </div>
    )
}


Tab.displayName = "Tab"
