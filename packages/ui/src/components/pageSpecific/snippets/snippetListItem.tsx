import React from 'react'
import { SnippetListItemButtons } from './snippetListItemButtons'
import Link from 'next/link'
import { Card } from '@ulld/tailwind/card'
import {  Badge } from '@ulld/tailwind/badge'
import { CodeHighlightContainer } from '../../code/syntaxHighlighting/codeHighlightContainer'
import { DeleteModalTriggerButton } from '../../inputs/deleteModalTriggerButton'
import { MdxContentCLIENT } from '../../mdxContent/mdxContentCLIENT'
import { SnippetListItemProps } from '@ulld/utilities/schemas/snippets'


interface SnippetListItemPropsInternal {
    item: SnippetListItemProps
}


export const SnippetListItem = ({ item }: SnippetListItemPropsInternal) => {
    return (
        <Card className={"w-full h-fit flex flex-col p-4 gap-3"}>
            <div className={"w-full h-fit grid grid-cols-[1fr_2rem]"}>
                <div className={"w-full text-lg font-semibold"}>
                    <MdxContentCLIENT
                        content={item.description}
                    />
                </div>
                <div className={"w-full h-full grid place-items-center"}>
                    <DeleteModalTriggerButton
                        config={{
                            primaryId: item.id,
                            title: "Delete Snippet",
                            body: "Are you sure you want to delete this snippet? This cannot be undone.",
                            buttonVariant: "destructive",
                            onConfirm: "deleteSnippet",
                            buttonText: "Delete",
                            toast: {
                                title: "Success",
                                description: "This snippet has been deleted successfully."
                            }
                        }}
                    />
                </div>
            </div>
            <div className={"flex flex-row justify-start items-center gap-3"}>{item.keywords.map((k, i) => <Link key={`kw-${item.id}-${i}`} href={`/snippets?${(() => {
                let p = new URLSearchParams()
                p.set("query", k)
                return p.toString()
            }
            )()}`}><Badge >{k}</Badge></Link>)}</div>
            <CodeHighlightContainer className={"max-h-[max(70vh,600px)] [&_code]:!text-[12px]"} language={item.language}>
                {item.content}
            </CodeHighlightContainer>
            <SnippetListItemButtons item={item} />
        </Card>
    )
}


SnippetListItem.displayName = "SnippetListItem"

