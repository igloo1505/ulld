import { CodeHighlightContainer } from '@ulld/ui/codeHighlightContainer'
import { Card } from '@ulld/tailwind/card'
import { MdxContentCLIENT } from "@ulld/render/mdx/client"
import { Badge } from '@ulld/tailwind/badge'
import Link from 'next/link'
import {Button} from "@ulld/tailwind/button"
import {DeleteModalTriggerButton} from "@ulld/ui/deleteModalTriggerButton"
import { copyStringToClipboard } from "@ulld/utilities/actions/copyStringToClipboard";
import { ValidatedSnippet } from '../../schemas'


interface SnippetListItemPropsInternal {
    item: ValidatedSnippet
}


const SnippetListItem = ({ item }: SnippetListItemPropsInternal) => {
    return (
        <Card className={"w-full h-fit flex flex-col p-4 gap-3"}>
            <div className={"w-full h-fit grid grid-cols-[1fr_2rem]"}>
                <div className={"w-full text-lg font-semibold"}>
                    <MdxContentCLIENT 
                        content={item.description}
                        bareAss
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
        <div className={"flex flex-row justify-end items-center gap-4"}>
            <Link href={`/snippets/add?edit=${item.id}`}>
                <Button>Edit</Button>
            </Link>
            <Button onClick={async () => copyStringToClipboard(item.content)}>Copy</Button>
        </div>
        </Card>
    )
}


SnippetListItem.displayName = "SnippetListItem"


export default SnippetListItem;
