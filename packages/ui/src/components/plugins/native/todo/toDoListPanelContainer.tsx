import clsx from 'clsx'
import React from 'react'



interface ToDoListPanelContainerProps {
    children: React.ReactNode
    barContents: React.ReactNode
    className?: string
}

const ToDoListPanelContainer = ({ children, barContents, className }: ToDoListPanelContainerProps) => {
    return (
        <div className={clsx("w-full border", className)}>
            <div className={"h-12 w-full border"}>{barContents}</div>
            {children}
        </div>
    )
}


ToDoListPanelContainer.displayName = "ToDoListPanelContainer"


export default ToDoListPanelContainer;
