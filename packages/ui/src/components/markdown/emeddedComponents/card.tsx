import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '#/components/shad/ui/card'
import React from 'react'
import { BaseEmbeddableComponentProps, getBaseEmbeddableProps } from './baseEmbeddableComponentTypes'
import { stringToConsistentId } from '#/lib/formatting/general'
import AppendStyleSheet from '#/components/util/appendStyleSheet'
import StringWithMdxTextSyntax from '../text/stringWithMdxTextSyntax'
import { conditionallyParseStringWithMath } from '#/actions/server/trpcAccessible/parsing'
import MathDisplayServer from '#/components/specificTypeDisplay/equation/mathDisplay_server'
import { stringHasLatex } from '#/lib/parsing/math'


type C = string | React.ReactNode | undefined | null

interface EmbeddableCardProps extends BaseEmbeddableComponentProps {
    title?: C
    body?: C
    children?: C
    description?: C
    desc?: C
}

const EmbeddableCard = async ({ title, body, children, description, desc, ..._props }: EmbeddableCardProps) => {
    let c = body || children
    const id = _props.id ? _props.id : typeof title === "string" ? stringToConsistentId(title) : `card-${new Date().valueOf() * Math.random()}`
    let stylesContent: string | null = null
    let _body = c
    let shouldEmbedHtml = false
    let _title = title
    let titleStyles: null | string = null
    if (typeof _title === "string") {
        let res = await conditionallyParseStringWithMath(_title, id)
        _title = res.content
        titleStyles = res.styles
    }

    let htmlProps: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> = {}
    if (typeof c === "string") {
        let _data = await conditionallyParseStringWithMath(c, id)
        _body = _data.content
        shouldEmbedHtml = true
        htmlProps.dangerouslySetInnerHTML = {
            __html: _data.content
        }
        stylesContent = _data.styles
    }


    return (
        <Card
            {...getBaseEmbeddableProps(_props)}
            id={id}
        >
            {stylesContent && <AppendStyleSheet content={stylesContent} />}
            {titleStyles && <AppendStyleSheet content={titleStyles} />}
            {(title || desc || description) && <CardHeader>
                {title && <CardTitle>{typeof title === "string" ? <MathDisplayServer
                    display={false}
                >{title}</MathDisplayServer> : title}</CardTitle>}
                {(desc || description) && <CardDescription>{(typeof description === "string" || typeof desc === "string") ? stringHasLatex(description || desc) ? <MathDisplayServer display={false}>{description as string || desc as string}</MathDisplayServer> : <StringWithMdxTextSyntax>{description as string || desc as string}</StringWithMdxTextSyntax> : description || desc}</CardDescription>}
            </CardHeader>}
            <CardContent>
                {shouldEmbedHtml ? <div className={"w-full h-full"}
                    {...htmlProps}
                />
                    : _body}
            </CardContent>
        </Card>
    )
}


EmbeddableCard.displayName = "EmbeddableCard"


export default EmbeddableCard;
