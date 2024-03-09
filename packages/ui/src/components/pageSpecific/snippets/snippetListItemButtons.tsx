"use client"
import { Button } from '@ulld/tailwind/base';
import { SnippetListItemProps, copyStringToClipboard } from '@ulld/utilities';
import Link from 'next/link';
import React from 'react'



interface SnippetListItemButtonsProps {
    item: SnippetListItemProps
}

const SnippetListItemButtons = ({ item }: SnippetListItemButtonsProps) => {
    return (
        <div className={"flex flex-row justify-end items-center gap-4"}>
            <Link href={`/snippets/add?edit=${item.id}`}>
                <Button>Edit</Button>
            </Link>
            <Button onClick={async () => copyStringToClipboard(item.content)}>Copy</Button>
        </div>
    )
}


SnippetListItemButtons.displayName = "SnippetListItemButtons"


export default SnippetListItemButtons;
