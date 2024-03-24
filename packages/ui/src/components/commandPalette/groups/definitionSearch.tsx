"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { Command } from 'cmdk'
import CommandPaletteItem from '../commandItem'
import { Route } from 'next'
import { pages } from '../commandPaletteUtilities'
import type { serverClient } from '@ulld/api/serverClient'
import { MdxContentCLIENT } from '../../mdxContent/mdxContentCLIENT'



export type D = Awaited<ReturnType<typeof serverClient.commandPalette.getDefinitions>>
export type DefCmdItem = (D[number] & { value: string, label: string })

interface DefinitionSearchCommandGroupProps {
    activePage?: pages
    close: () => void
    definitionSearchCommands: DefCmdItem[]
    setLoading: (b: boolean) => void
    clearCommands: () => void
}


/* WARNING: Need to parse definition content and label to markdown on the initial request. */
const DefinitionSearchCommandGroup = ({ activePage, close, definitionSearchCommands, clearCommands }: DefinitionSearchCommandGroupProps) => {
    const router = useRouter()

    useEffect(() => {
        return () => clearCommands()
    }, [])

    return (
        <Command.Group heading="Definitions">
            {definitionSearchCommands.map((n, i) => {
                return <CommandPaletteItem
                    close={close}
                    key={`def-${i}`}
                    parent={pages.searchDefinitions}
                    activePage={activePage}
                    onSelect={() => {
                        close()
                        if (n.mdxNote?.href) {
                            router.push(n.mdxNote.href as Route)
                        }
                    }}
                    value={n.value}
                >
                    <MdxContentCLIENT content={n.label} />
                </CommandPaletteItem>
            })}
        </Command.Group>
    )
}


DefinitionSearchCommandGroup.displayName = "DefinitionSearchCommandGroup"


export default DefinitionSearchCommandGroup;
