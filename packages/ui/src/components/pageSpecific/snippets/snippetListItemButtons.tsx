"use client"
import { Button } from '@ulld/tailwind/button';
import { copyStringToClipboard } from '@ulld/utilities/actions/copyStringToClipboard';
import Link from 'next/link';
import React from 'react'
import {SnippetListItemProps} from "@ulld/utilities/schemas/snippets"


interface SnippetListItemButtonsProps {
    item: SnippetListItemProps
}

export const SnippetListItemButtons = ({ item }: SnippetListItemButtonsProps) => {
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
