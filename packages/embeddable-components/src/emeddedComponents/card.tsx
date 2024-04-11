import React from 'react'
import { BaseEmbeddableComponentProps, getBaseEmbeddableProps } from './baseEmbeddableComponentTypes'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@ulld/tailwind/card'
import { stringToConsistentId } from "@ulld/state/formatting/general"
import { MdxContentCLIENT } from '@ulld/render/mdx/client'


type C = string | undefined | null

interface EmbeddableCardProps extends BaseEmbeddableComponentProps {
    title?: C
    body?: C
    children?: C | React.ReactNode
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
            {(title || desc || description) && <CardHeader>
                {title && <CardTitle>
                    <MdxContentCLIENT
                    content={title as string}
                    inline
                /></CardTitle>
                }
                {(desc || description) && (<CardDescription>
<MdxContentCLIENT 
 content={desc || description as string}
                        display
                    />
                </CardDescription>)}
            </CardHeader>}
            <CardContent>
                {typeof c === "string" ? <MdxContentCLIENT
                    content={c || ""}
                    display
                /> : c as React.ReactNode}
            </CardContent>
        </Card>
    )
}


EmbeddableCard.displayName = "EmbeddableCard"
