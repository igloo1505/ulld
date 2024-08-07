"use client"
import React from 'react'
import { Input } from '@ulld/tailwind/input'
import { SnippetFilterParams } from '../../types'
import { useRouter } from 'next/navigation'


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
            className={"min-w-1/3 sm:min-w-[200px] md:min-w-[300px]"}
            placeholder="Search..." value={params.query || ""}
            onChange={(e) => getSearchParams(e.target.value)}
        />
    )
}


SnippetFilterInput.displayName = "SnippetFilterInput"


export default SnippetFilterInput;
