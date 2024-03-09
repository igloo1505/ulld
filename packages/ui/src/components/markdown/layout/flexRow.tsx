import React from 'react'
import { BaseEmbeddableComponentProps, getBaseEmbeddableProps } from '../emeddedComponents/baseEmbeddableComponentTypes'
import clsx from 'clsx'



interface FlexRowProps extends BaseEmbeddableComponentProps {
    children: React.ReactNode
    wrap?: boolean
    gap: "sm" | "md" | "lg" | "xl" | "none"
    center?: boolean
    start?: boolean
    end?: boolean
    fit?: boolean
    full?: boolean
    between?: boolean
    around?: boolean
    even?: boolean
    grow?: boolean
}

export const FlexRow = ({ children, wrap, gap = "md", center, start, end, fit, full, between, around, even, grow, ..._props }: FlexRowProps) => {
    const props = getBaseEmbeddableProps(_props)
    return (
        <div {...props} className={clsx("flex flex-row items-center",
            wrap !== false && "flex-wrap",
            gap === "sm" && "gap-1",
            gap === "md" && "gap-2",
            gap === "lg" && "gap-4",
            gap === "xl" && "gap-6",
            gap === "none" && "gap-0",
            start && "justify-start",
            center && "justify-center",
            end && "justify-end",
            between && "justify-between",
            around && "justify-around",
            even && "justify-evenly",
            grow && "[&>*]:grow",
            Boolean(fit || full) && "w-full",
            props.className && props.className
        )}>{children}</div>
    )
}


FlexRow.displayName = "FlexRow"
