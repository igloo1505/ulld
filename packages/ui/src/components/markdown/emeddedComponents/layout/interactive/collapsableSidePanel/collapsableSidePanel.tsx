import clsx from 'clsx'
import React, { useId } from 'react'
import "#/styles/collapsableSidePanel.scss"
import CollapsableSidePanelBtn from './collapsableSidePanelButton'
import { ReduxProvider } from '@ulld/state'


interface CollapsableSidePanelProps {
    children: React.ReactNode
    width?: number
    left?: boolean
    open?: boolean
    id?: string
}

export const CollapsableSidePanel = ({ children, id, open, width, left }: CollapsableSidePanelProps) => {
    const _id = useId()
    const ID = id || _id
    let w = width || 350
    const initialOpen = Boolean(open)
    return (
        <div
            className={clsx("collapsableSidePanel bg-popover group/collapsablesidepanel h-fit p-4 border border-border relative", left ? "left" : "right", open && "open")}
            id={ID}
            style={{
                width: `min(${w}px, 100vw)`
            }}
        >
            <ReduxProvider>
                <CollapsableSidePanelBtn
                    id={ID}
                    width={w}
                    initialOpen={initialOpen}
                    dir={left ? "left" : "right"}
                />
            </ReduxProvider>
            <div
                className={"collapsableSidePanel-content transition-transform duration-300"}
                style={{
                    width: `min(${w - 34}px, calc(100vw - 34px))`
                }}
            >
                <div className={clsx("w-8 h-8 inline-block", left ? "float-right" : "float-left")} />
                {children}
            </div>
        </div>
    )
}


CollapsableSidePanel.displayName = "CollapsableSidePanel"
