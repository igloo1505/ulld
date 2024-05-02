import React from 'react'
import DefinitionReferenceTag from './definitionReferenceTag'
import DefinitionTagAnchor from './definitionTagAnchor'



export interface DefinitionTagProps {
    definitionId: string
    isDefinition?: boolean
    content?: string
    label?: string
}

export const DefinitionTag = (props: DefinitionTagProps) => {
    const { isDefinition } = props

    if (isDefinition) {
        return (
            <DefinitionTagAnchor {...props} />
        )
    }

    return (
        <DefinitionReferenceTag {...props} />
    )
}


DefinitionTag.displayName = "DefinitionTag"
