import CodeHighlightContainer from '#/components/functionality/codeHighlightContainer'
import { Card } from '#/components/shad/ui/card'
import React from 'react'
import SnippetListItemButtons from './snippetListItemButtons'
import { Badge } from '#/components/shad/ui/badge'
import Link from 'next/link'
import DeleteModalTriggerButton from '#/components/inputs/deleteModalTriggerButton'
import SerializedMdxStringDisplayServer from '#/components/specificTypeDisplay/markdown/mdx/serializeMdxStringDisplayServer'
import { SnippetListItemProps } from '#/lib/validators/snippets'


interface SnippetListItemPropsInternal {
    item: SnippetListItemProps
}


const SnippetListItem = ({ item }: SnippetListItemPropsInternal) => {
    return (
        <Card className={"w-full h-fit flex flex-col p-4 gap-3"}>
            <div className={"w-full h-fit grid grid-cols-[1fr_2rem]"}>
                <div className={"w-full text-lg font-semibold"}>
                    <SerializedMdxStringDisplayServer
                        data={item.description}
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


export default SnippetListItem;
