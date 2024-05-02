import React from 'react'
import { EquationReference } from './equationReference'

export interface EquationRefProps {
    id: string
    children: React.ReactNode
    anchor?: boolean
    defaultContent?: string | number
}


export const EquationRef = (props: EquationRefProps & {}) => {
    const { id, children, anchor } = props
    if (anchor) {
        return (
            <div
                className={"w-full h-fit"}
                id={`eqRef-${id}`}
            >
                {children}
            </div>
        )
    } else {
        return <EquationReference id={id} defaultContent={props.defaultContent} />
    }
}


EquationRef.displayName = "EquationRef"
