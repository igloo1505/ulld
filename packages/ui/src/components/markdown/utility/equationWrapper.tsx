import React from 'react'
import { BaseEmbeddableComponentProps, getBaseEmbeddableProps } from '../emeddedComponents/baseEmbeddableComponentTypes'
import EquationContextMenu from './equationContextMenu'
import { getRandomId } from '#/utils/ui'
import Link from 'next/link'
import { serverClient } from '#/trpc/serverClient'
import AppendStyleSheet from '#/components/util/appendStyleSheet'
import HandleEquationClick from './handleEquationClick'



interface EquationWrapperProps extends BaseEmbeddableComponentProps {
    children?: React.ReactNode
    id?: string /// Equation Id... not DOM id
    python?: string
}

/* TODO: Come back here and allow for supplying ***only*** an id, and populate the children from the DB. Switch this back to a RSC by swapping the router for a Link and then populate directly from the DB if no children exist. */
const EquationWrapper = async ({ children, id, python, ..._props }: EquationWrapperProps) => {
    const props = getBaseEmbeddableProps(_props, "w-full h-fit flex flex-col justify-center items-center")
    if (!children && !id) return null

    let body = children
    let styles: string | undefined = undefined
    let asPython: string | undefined = undefined
    let latexContent: string | undefined = undefined
    let isRemote = false
    const appendToId = id ? `${id}-equation` : getRandomId()

    if (!body && id) {
        isRemote = true
        let res = await serverClient.equations.getEquationEmbedProps({
            equationId: id as string,
            options: {
                inline: false
            },
            appendStylesToId: appendToId
        })
        body = res.content.content
        styles = res.content.styles
        asPython = res.asPython || undefined
        latexContent = res.contentLatex
    }


    return (
        <EquationContextMenu
            python={python || asPython}
            latex={typeof children === "string" ? children : latexContent}
            equationId={id}
        >
            {styles && <AppendStyleSheet content={styles} />}
            <HandleEquationClick id={appendToId} />
            <div
                {...props}
            >
                <Link
                    className="cursor-pointer w-fit h-fit border-2 px-4 hover:border-primary transition-colors duration-200 ease-in group-[.signifyEquationIds]/html:bg-primary group-[.signifyEquationIds]/html:text-primary-foreground rounded-md !text-foreground max-w-[90vw] *:!text-foreground"
                    id={appendToId}
                    href={`/equations/details/${id}`}
                    dangerouslySetInnerHTML={isRemote ? { __html: body as string } : undefined}
                >
                    {isRemote ? undefined : body}
                </Link>
            </div>
        </EquationContextMenu>
    )
}


EquationWrapper.displayName = "EquationWrapper"


export default EquationWrapper;
