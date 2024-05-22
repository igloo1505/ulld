import React from 'react'
import { EquationReference } from './equationReference'
import EquationReferenceAnchor from './equationReferenceAnchor'

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
        <EquationReferenceAnchor id={id}>
                {children}
        </EquationReferenceAnchor>
        )
    } else {
        return <EquationReference id={id} defaultContent={props.defaultContent} />
    }
}


EquationRef.displayName = "EquationRef"
