import React from 'react'
import { SnippetFilterParams } from './snippetFilterParams'
import Link from 'next/link'
import { Button } from '#/components/shad/ui/button'
import SnippetFilterInput from './snippetFilterInput'
import SnippetLanguageSelect from './addSnippetLanguageSelect'



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
