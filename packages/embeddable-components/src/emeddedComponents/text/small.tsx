import clsx from 'clsx'
import React from 'react'
import { BaseEmbeddableComponentProps, getBaseEmbeddableProps } from '../baseEmbeddableComponentTypes'
import { SmallProps } from './smallProps'



export const Small = ({ children, y, close, noMargin, muted, center, ..._props }: SmallProps & {y?: number, close?: boolean} & BaseEmbeddableComponentProps<HTMLSpanElement>) => {
    const props = getBaseEmbeddableProps(_props)
    return (
        <span
            {...props}
            className={clsx("text-sm not-prose", (close !== false && !noMargin) && "!mt-2", center && "w-full text-center", noMargin && "!my-0", muted && "text-muted-foreground", props.className)}
            style={{
                ...props.style,
                ...(y && {transform: `translateY(${y}px)`})
            }}
        >{children}</span>
    )
}


Small.displayName = "Small"
