import CompiledMdxContainer from '#/components/wrappers/compiledMdxContainer'
import type { serverClient } from '#/trpc/serverClient'
import clsx from 'clsx'
import React from 'react'

export type DefinitionListType = Awaited<ReturnType<typeof serverClient.search.getDefinitionList>>

interface DefinitionSublistProps {
    letter: string
    currentPage: string
    definitions: DefinitionListType
}

const DefinitionItem = ({ definition }: { definition: NonNullable<DefinitionListType>[number] }) => {
    return (
        <dl
            className={"pl-8 definitionAnchor"}
        >
            <dt>
                {definition.label}
            </dt>
            {Boolean(definition.content && !definition.parsedContent) && <dd>
                {definition.content}
            </dd>}
            {definition.parsedContent && <dd>
                <CompiledMdxContainer content={definition.parsedContent} />
            </dd>}
        </dl>
    )
}


const DefinitionSublist = ({ letter, definitions, currentPage }: DefinitionSublistProps) => {
    if (currentPage !== "all" && currentPage !== letter) return null
    return (
        <div className={"w-full"}>
            <div className={clsx("block text-2xl font-bold mt-4 mb-3", definitions.length === 0 && "text-muted-foreground")}>{letter.toUpperCase()}</div>
            {definitions.map((d) => {
                return <DefinitionItem key={d.id} definition={d} />
            })}
        </div>
    )
}


DefinitionSublist.displayName = "DefinitionSublist"


export default DefinitionSublist;
