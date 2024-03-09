import React from 'react'
import { SnippetListItem } from './snippetListItem'
import clsx from 'clsx'
import { serverClient } from '@ulld/api'
import { SnippetFilterParams, snippetValidator } from '@ulld/utilities'



interface SnippetListProps {
    params: SnippetFilterParams
}

const SnippetList = async ({ params }: SnippetListProps) => {
    const snippets = snippetValidator.array().parse((await serverClient.snippets.getSnippets(params)))

    return (
        <div className={"w-full h-fit flex flex-col justify-center items-center gap-4 mt-3"}>
            {snippets.map((s) => <SnippetListItem key={s.id} item={s} />)}
            <div className={clsx("w-full text-center text-semibold text-lg", snippets.length > 0 && "hidden")}>No snippets found</div>
        </div>
    )
}


SnippetList.displayName = "SnippetList"


export default SnippetList;
