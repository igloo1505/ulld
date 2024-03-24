"use client"
import React, { useEffect, useMemo, useState } from 'react'
import {  useToast } from '@ulld/tailwind/use-toast';
import { ContextMenuItem } from '@ulld/tailwind/context-menu';
import { PrismaMdxNoteSummaryOutput } from '@ulld/api/classes/prismaMdxRelations/protocols/mdxNote';
import { client } from '@ulld/api/client';
import { MdxContentSERVER } from '../mdxContent/mdxContentSERVER';


interface ThemedSummaryCardContextMenuProps {
    cardId: string
    item: PrismaMdxNoteSummaryOutput
}

interface ContextMenuItem<T extends string | number | undefined> {
    label: string
    id: T
    onClick: () => void
}

const getContextItems = (item: ThemedSummaryCardContextMenuProps["item"], toast: (val: React.ReactNode) => void) => {
    const contextItems: ContextMenuItem<number | undefined>[] = [
        {
            label: "Delete",
            id: item.id,
            onClick: async () => {
                if (item.id) {
                    client.mdx.deleteNoteById.mutate(item.id)
                }
            }
        },
        {
            label: item.bookmarked ? "Remove Bookmark" : "Bookmark",
            id: item.id,
            onClick: async () => {
                if (item.id) {
                    client.mdx.toggleBookmarkedById.mutate(item.id)
                    /* TODO: Probably need to come back and change this to allow latex in titles and display it properly. Ideally create a 'toast' slice in state and create a universal function to automatically parse and style latex content appropriately. */
                    toast(item.bookmarked ? "Bookmark removed" : <div>
                        <span>
                            <MdxContentSERVER content={item.title} />
                        </span>
                        {` was bookmarked`}
                    </div>)
                }
            }
        },
    ]
    return contextItems
}


/* TODO: Append listener to proper card and adjust props to follow target that is not a direct child to allow the summary card to remain a server component. */
const ThemedSummaryCardContextMenu = ({ cardId, item }: ThemedSummaryCardContextMenuProps) => {
    const [target, setTarget] = useState<HTMLElement | null>(null)
    const { toast: _toast } = useToast()

    useEffect(() => {
        setTarget(document.getElementById(cardId))
    }, [cardId])

    const toast = (desc: React.ReactNode) => _toast({
        title: "Success",
        description: desc
    })

    const contextItems = useMemo(() => getContextItems(item, toast), [item])

    /* return ( */
    /*     <ContextMenuPortal */
    /*         container={target} */
    /*     > */
    /*         <ContextMenu> */
    /*             <ContextMenuContent> */
    /*                 {contextItems.map((l) => { */
    /*                     return ( */
    /*                         <ContextMenuItem */
    /*                             key={l.label} */
    /*                             onClick={l.onClick} */
    /*                         >{l.label}</ContextMenuItem> */
    /*                     ) */
    /*                 })} */
    /*             </ContextMenuContent> */
    /*         </ContextMenu> */
    /*     </ContextMenuPortal> */
    /* ) */
    return <div></div>
}


ThemedSummaryCardContextMenu.displayName = "ThemedSummaryCardContextMenu"


export default ThemedSummaryCardContextMenu;
