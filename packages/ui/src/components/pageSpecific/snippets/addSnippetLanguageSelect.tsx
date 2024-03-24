"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@ulld/tailwind/select'
import { technologiesNameMap } from '@ulld/utilities/schemas/code/technologiesNameMap'
import { SnippetFilterParams } from '@ulld/utilities/schemas/snippets'


const techArr = {
    all: "All",
    ...technologiesNameMap
}

interface SnippetLanguageSelectProps {
    params: SnippetFilterParams
}

const SnippetLanguageSelect = ({ params }: SnippetLanguageSelectProps) => {
    const router = useRouter()

    const handleSelectChange = (value: string) => {
        if (value === "all") {
            return router.push(`/snippets`)
        }
        let p = params ? new URLSearchParams(params as Record<string, string>) : new URLSearchParams()
        p.set("language", value)
        router.push(`/snippets?${p.toString()}`)
    }
    let keys = Object.keys(techArr)

    return (
        <Select
            onValueChange={handleSelectChange}
            defaultValue={params.language || keys[0]}
        >
            <SelectTrigger
                className={"min-w-1/3 sm:min-w-[200px]"}
            >
                <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
                {keys.map((k) => {
                    return <SelectItem key={k} value={k}>{k === "all" ? "All" : technologiesNameMap[k as keyof typeof technologiesNameMap]}</SelectItem>
                })}
            </SelectContent>
        </Select>
    )
}


SnippetLanguageSelect.displayName = "SnippetLanguageSelect"


export default SnippetLanguageSelect;
