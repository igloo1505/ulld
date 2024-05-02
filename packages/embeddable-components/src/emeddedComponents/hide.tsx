import React from 'react'
import { BaseEmbeddableComponentProps, getBaseEmbeddableProps } from './baseEmbeddableComponentTypes'
import clsx from 'clsx'



interface HideProps extends BaseEmbeddableComponentProps {
    children: React.ReactNode
}

export const Hide = ({ children, ...props }: HideProps) => {
    const _props = getBaseEmbeddableProps(props)

    return (
        <div
            {..._props}
            className={clsx("hidden", _props.className && _props.className)}
        >{children}</div>
    )
}


Hide.displayName = "Hide"
