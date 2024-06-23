import React from 'react'
import { EquationReference } from './equationReference'
import EquationReferenceAnchor from './equationReferenceAnchor'
import { EquationRefProps } from './equationRefProps'



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
