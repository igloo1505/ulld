import clsx from 'clsx'
import React from 'react'
import { SSRFoldingAdmonitionTitle } from './SSRFoldingAdmonitionObserver'
import { AdmonitionProps } from '../../../types'



interface FoldingAdmonitionProps extends AdmonitionProps {
    open?: boolean
    id: string
}

const FoldingAdmonition = ({ type, id, sidebar, dropdown, children, open, title, footer }: FoldingAdmonitionProps) => {
    return (
        <div
            className={clsx(`rounded-lg  my-4 admonition ${type || "note"} overflow-hidden group/fold h-fit`, !dropdown && "open", type || "note", dropdown && "foldable", sidebar && "w-full lg:w-[33%] lg:float-right lg:ml-4")}
            id={id}
            data-state={open ? "open" : "closed"}
        >
            <SSRFoldingAdmonitionTitle
                title={title}
                dropdown={dropdown}
                type={type}
                id={id}
            />
            <div className={clsx("admonitionBody body bg-gray-100 dark:bg-gray-800 origin-top relative overflow-hidden will-change-auto", type === "plain" && "bg-transparent dark:bg-transparent")}>
                {children}
            </div>
            {footer && <div className={clsx("w-full py-3 px-3 text-sm text-muted-foreground bg-muted")}>{footer}</div>}
        </div>
    )
}


FoldingAdmonition.displayName = "FoldingAdmonition"


export default FoldingAdmonition;
