import { serverClient } from '#/trpc/serverClient'
import { Route } from 'next'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '../shad/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../shad/ui/tooltip'
import MathDisplayServer from '../specificTypeDisplay/equation/mathDisplay_server'



interface SequentialNoteBottomBarProps {
    sequentialIndex?: number
    sequentialId?: string
}


const SequentialNoteBottomBar = async ({ sequentialId, sequentialIndex }: SequentialNoteBottomBarProps) => {
    if (!sequentialId || typeof sequentialIndex !== "number") return null
    let noteList = await serverClient.search.getSequentialIdListByKey(sequentialId)
    console.log("noteList: ", noteList)
    let params = new URLSearchParams()
    params.set("sequentialId", sequentialId)
    const thisIndex = noteList.map((n) => n.sequentialIndex).indexOf(sequentialIndex)
    console.log("thisIndex: ", thisIndex)


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
                            <MathDisplayServer
                                math={noteList[thisIndex - 1].title}
                                element="p"
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
                            <MathDisplayServer
                                math={noteList[thisIndex + 1].title}
                                element="p"
                            />
                        </TooltipContent>
                    </Tooltip>}
                </div>
            </div>
        </TooltipProvider>
    )
}


SequentialNoteBottomBar.displayName = "SequentialNoteBottomBar"


export default SequentialNoteBottomBar;
