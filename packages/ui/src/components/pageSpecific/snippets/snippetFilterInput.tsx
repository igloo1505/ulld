"use client"
import { Input } from '@ulld/tailwind/base'
import React from 'react'
import { useRouter } from 'next/navigation'
import { SnippetFilterParams } from '@ulld/utilities'


const SnippetFilterInput = ({ params }: { params: SnippetFilterParams }) => {
    const router = useRouter()

    const getSearchParams = (value: string) => {
        let p = new URLSearchParams()
        p.set("query", value)
        if (params.language) {
            p.set("language", params.language)
        }
        router.push(`/snippets?${p.toString()}`)
    }

    return (
        <Input
            className={"min-w-1/3 sm:min-w-[200px]"}
            placeholder="Search..." value={params.query || ""}
            onChange={(e) => getSearchParams(e.target.value)}
        />
    )
}


SnippetFilterInput.displayName = "SnippetFilterInput"


export default SnippetFilterInput;
