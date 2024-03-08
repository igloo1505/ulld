import React from 'react'
import { SnippetFilterParams } from './snippetFilterParams'
import { serverClient } from '#/trpc/serverClient'
import SnippetListItem from './snippetListItem'
import clsx from 'clsx'
import { snippetValidator } from '#/lib/validators/snippets'



interface SnippetListProps {
    params: SnippetFilterParams
}

const SnippetList = async ({ params }: SnippetListProps) => {
    const snippets = snippetValidator.array().parse((await serverClient.getSnippets(params)))

    return (
        <div className={"w-full h-fit flex flex-col justify-center items-center gap-4 mt-3"}>
            {snippets.map((s) => <SnippetListItem key={s.id} item={s} />)}
            <div className={clsx("w-full text-center text-semibold text-lg", snippets.length > 0 && "hidden")}>No snippets found</div>
        </div>
    )
}


SnippetList.displayName = "SnippetList"


export default SnippetList;
