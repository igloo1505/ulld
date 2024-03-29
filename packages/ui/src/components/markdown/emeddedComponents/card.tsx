import React from 'react'
import { BaseEmbeddableComponentProps, getBaseEmbeddableProps } from './baseEmbeddableComponentTypes'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@ulld/tailwind/card'
import {stringToConsistentId} from "@ulld/state/formatting/general"
import MdxStringDisplayClient from '../utility/mdxStringDisplayClient'


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
                    <MdxStringDisplayClient
                    content={title as string}
                    display="inline"
                /></CardTitle>
                }
                {(desc || description) && (<CardDescription>
<MdxStringDisplayClient 
 content={desc || description as string}
                        display="display"
                    />
                </CardDescription>)}
            </CardHeader>}
            <CardContent>
                {typeof c === "string" ? <MdxStringDisplayClient 
                    content={c || ""}
                    display={"display"}
                /> : c}
            </CardContent>
        </Card>
    )
}


EmbeddableCard.displayName = "EmbeddableCard"
