"use client"
import React, { useEffect } from 'react'
import CommandPaletteItem from '../commandItem'
import { useRouter } from 'next/navigation'
import { Route } from 'next'
import { Command } from 'cmdk'
import { pages } from '../commandPaletteUtilities'
import { serverClient, client } from '@ulld/api'
import MdxContentCLIENT from '../../mdxContent/mdxContentCLIENT'


export type NoteCmdItems = Awaited<ReturnType<typeof serverClient.commandPalette.noteSearch>>

export type NoteSearchItem = NoteCmdItems[number] & { value: string }

interface NoteSearchCommandGroupProps {
    activePage?: pages
    close: () => void
    noteSearchCommands: NoteSearchItem[]
    setNoteSearchCommands: (nts: NoteSearchItem[]) => void
    setLoading: (b: boolean) => void
}


const NoteSearchCommandGroup = ({ activePage, close, setLoading, noteSearchCommands, setNoteSearchCommands }: NoteSearchCommandGroupProps) => {
    const router = useRouter()

    const gatherNoteCommands = async () => {
        setLoading(true)
        let noteData = await client.commandPalette.noteSearch.query()
        setLoading(false)
        setNoteSearchCommands(noteData.map((n) => ({
            ...n,
            value: n.href.toLowerCase()
        })))
    }

    useEffect(() => {
        if (activePage === pages.searchNotes) {
            gatherNoteCommands()
        }
    }, [activePage])


    return (
        <Command.Group heading="Notes">
            {noteSearchCommands.map((n, i) => {
                const _title = n.title || n.href.split('/').at(-1)
                return <CommandPaletteItem
                    close={close}
                    key={`note-${i}`}
                    parent={pages.searchNotes}
                    activePage={activePage}
                    onSelect={() => {
                        close()
                        router.push(n.href as Route)
                    }}
                    value={n.value}
                >
                    <MdxContentCLIENT inline stylesId={`note-${n.id}`} content={_title || "No Title Found"} />
                </CommandPaletteItem>
            })}
        </Command.Group>
    )
}


NoteSearchCommandGroup.displayName = "NoteSearchCommandGroup"


export default NoteSearchCommandGroup;
