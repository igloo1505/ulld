import clsx from 'clsx'
import React from 'react'
import { BaseEmbeddableComponentProps, getBaseEmbeddableProps } from '../baseEmbeddableComponentTypes'


interface SmallProps extends BaseEmbeddableComponentProps {
    children: string
    center?: boolean
    muted?: boolean
    close?: boolean
    noMargin?: boolean
    y?: number
}

export const Small = ({ children, y, close, noMargin, muted, center, ..._props }: SmallProps) => {
    const props = getBaseEmbeddableProps(_props)
    return (
        <span
            {...props}
            className={clsx("text-sm", (close !== false && !noMargin) && "!mt-2", center && "w-full text-center", noMargin && "!my-0", muted && "text-muted-foreground", props.className)}
            style={{
                ...props.style,
                ...(y && {transform: `translateY(${y}px)`})
            }}
        >{children}</span>
    )
}


Small.displayName = "Small"
