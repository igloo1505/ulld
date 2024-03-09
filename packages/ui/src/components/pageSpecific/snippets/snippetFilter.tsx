import React from 'react'
import Link from 'next/link'
import { Button } from '@ulld/tailwind/base'
import SnippetFilterInput from './snippetFilterInput'
import SnippetLanguageSelect from './addSnippetLanguageSelect'
import { SnippetFilterParams } from '@ulld/utilities'



interface SnippetFilterProps {
    params: SnippetFilterParams
}

const SnippetFilter = ({ params }: SnippetFilterProps) => {
    return (
        <div className={"w-full h-fit flex flex-row justify-between items-center"}>
            <div className={"w-fit h-full flex flex-row justify-start items-center gap-4"}>
                <SnippetFilterInput params={params} />
                <SnippetLanguageSelect params={params} />
            </div>
            <div>
                <Link href={"/snippets/add"}>
                    <Button>Add Snippet</Button>
                </Link>
            </div>
        </div>
    )
}


SnippetFilter.displayName = "SnippetFilter"


export default SnippetFilter;
