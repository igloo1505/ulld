import React from 'react'
import { Route } from 'next'
import Link from 'next/link'
import { buttonVariants } from '@ulld/tailwind/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@ulld/tailwind/tooltip'
import { serverClient } from '@ulld/api/serverClient'
import { MdxContentSERVER } from '@ulld/render/mdx/server'



interface SequentialNoteBottomBarProps {
    sequentialIndex?: number | null
    sequentialId?: string | null
}


export const SequentialNoteBottomBar = async ({ sequentialId, sequentialIndex }: SequentialNoteBottomBarProps) => {
    if (!sequentialId || typeof sequentialIndex !== "number") return null
    let noteList = await serverClient.search.getSequentialIdListByKey(sequentialId)
    let params = new URLSearchParams()
    const thisIndex = noteList.map((n) => n.sequentialIndex).indexOf(sequentialIndex)


    return (
        <TooltipProvider>
            <div className={"w-full mt-12 flex flex-row justify-between items-center"}>
                <div className={""}>
                    {thisIndex > 0 && <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href={noteList[thisIndex - 1].href as Route}
                                className={buttonVariants({ variant: "secondary" })}
                            >Back</Link>
                        </TooltipTrigger>
                        <TooltipContent>
                            <MdxContentSERVER
                                content={noteList[thisIndex - 1].title}
                                inline
                            />
                        </TooltipContent>
                    </Tooltip>}
                </div>
                <Link
                    href={`/searchAll?${params.toString()}`}
                    className={buttonVariants({ variant: "secondary" })}
                >List</Link>
                <div className={""}>
                    {thisIndex < noteList.length - 1 && <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href={noteList[thisIndex + 1].href as Route}
                                className={buttonVariants({ variant: "secondary" })}
                            >Next</Link>
                        </TooltipTrigger>
                        <TooltipContent>
                            <MdxContentSERVER
                                content={noteList[thisIndex + 1].title}
                                inline
                            />
                        </TooltipContent>
                    </Tooltip>}
                </div>
            </div>
        </TooltipProvider>
    )
}


SequentialNoteBottomBar.displayName = "SequentialNoteBottomBar"
