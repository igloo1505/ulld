import React from 'react'
import { BaseEmbeddableComponentProps, getBaseEmbeddableProps } from './baseEmbeddableComponentTypes'
import { stringToConsistentId } from '@ulld/state'
import { Card } from '@ulld/tailwind'


type C = string | React.ReactNode | undefined | null

interface EmbeddableCardProps extends BaseEmbeddableComponentProps {
    title?: C
    body?: C
    children?: C
    description?: C
    desc?: C
}

export const EmbeddableCard = async ({ title, body, children, description, desc, ..._props }: EmbeddableCardProps) => {
    let c = body || children
    const id = _props.id ? _props.id : typeof title === "string" ? stringToConsistentId(title) : `card-${new Date().valueOf() * Math.random()}`


    return (
        <Card
            {...getBaseEmbeddableProps(_props)}
            id={id}
        >
            This was completely mutilated while converting to a monorepo. Revisit this with a single, unified, RELIABLE remote mdx parser.
        </Card>
    )
}


EmbeddableCard.displayName = "EmbeddableCard"
