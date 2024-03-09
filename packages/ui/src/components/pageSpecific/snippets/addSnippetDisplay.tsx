"use client"
import React from 'react'
import { Prisma } from '@prisma/client'
import { UseFormReturn } from 'react-hook-form'
import clsx from 'clsx'
import CodeHighlightContainer from '../../code/syntaxHighlighting/codeHighlightContainer'

interface AddSnippetDisplayProps {
    form: UseFormReturn<Required<Prisma.SnippetCreateInput> & {
        keywordInput?: string;
    }, any, undefined>

}

const AddSnippetDisplay = ({ form }: AddSnippetDisplayProps) => {

    const _content = form.watch("content")

    return (
        <div className={"w-full max-w-full h-full flex flex-col justify-center items-center gap-4 noScroll"}>
            {_content.length === 0 && <h2 className={"text-lg"}>Output</h2>}
            <CodeHighlightContainer
                className={clsx("overflow-auto bg-background p-0 h-fit w-fit max-w-full max-h-full [&>pre]:w-fit", _content.length > 0 && "[&>pre]:p-4")}
                language={form.watch("language")}
            >
                {form.watch("content")}
            </CodeHighlightContainer>
        </div>
    )
}


AddSnippetDisplay.displayName = "AddSnippetDisplay"


export default AddSnippetDisplay;
