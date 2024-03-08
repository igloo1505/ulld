"use client"
import React from 'react'
import { SnippetFilterParams } from './snippetFilterParams'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '#/components/shad/ui/select'
import { TechnologiesNameMap } from '#/utils/prisma/technologiesMap'
import { useRouter } from 'next/navigation'


const techArr = {
    all: "All",
    ...TechnologiesNameMap
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
                    return <SelectItem key={k} value={k}>{k === "all" ? "All" : TechnologiesNameMap[k as keyof typeof TechnologiesNameMap]}</SelectItem>
                })}
            </SelectContent>
        </Select>
    )
}


SnippetLanguageSelect.displayName = "SnippetLanguageSelect"


export default SnippetLanguageSelect;
