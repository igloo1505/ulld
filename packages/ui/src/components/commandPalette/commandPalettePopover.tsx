"use client"
import React, { KeyboardEvent, useEffect, useState } from 'react'
// @ts-ignore
import { tinykeys } from "tinykeys"
import CommandPalette from './commandPalette'
import { Command } from 'cmdk'
import { pages as pageList, textSearchPages } from './commandPaletteUtilities'
import { enterIdSelectMode } from '@ulld/state'


interface CommandPalettePopoverProps {
}


const shouldIgnoreKeymap = (e: KeyboardEvent<unknown>): boolean => {
    const target = e.target as HTMLElement
    return target.nodeName ? target.nodeName !== "BODY" : false
}


const CommandPalettePopover = ({ }: CommandPalettePopoverProps) => {
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState('')
    const [pages, setPages] = useState<pageList[]>([])
    const page = pages[pages.length - 1]

    useEffect(() => {
        tinykeys(window, {
            "Meta+Shift+P": () => {
                setOpen(true)
            },
            "s n": (e: KeyboardEvent<unknown>) => {
                if (shouldIgnoreKeymap(e) || open) return
                e.preventDefault()
                e.stopPropagation()
                setPages([pageList.searchNotes])
                setOpen(true)
                setSearch("")
            },
            "s t": (e: KeyboardEvent<unknown>) => {
                if (shouldIgnoreKeymap(e) || open) return
                e.preventDefault()
                e.stopPropagation()
                setPages([pageList.searchTags])
                setOpen(true)
                setSearch("")
            },
            "s e": (e: KeyboardEvent<unknown>) => {
                if (shouldIgnoreKeymap(e) || open) return
                e.preventDefault()
                e.stopPropagation()
                setPages([pageList.searchEquations])
                setOpen(true)
                setSearch("")
            },
            "t i": (e: KeyboardEvent<unknown>) => {
                if (shouldIgnoreKeymap(e) || open) return
                e.preventDefault()
                e.stopPropagation()
                enterIdSelectMode()
            },
            "s f": (e: KeyboardEvent<unknown>) => {
                if (shouldIgnoreKeymap(e) || open) return
                e.preventDefault()
                e.stopPropagation()
                setPages([textSearchPages.fullTextSearch as unknown as pageList])
                setOpen(true)
                setSearch("")
            },
            "s v": (e: KeyboardEvent<unknown>) => {
                if (shouldIgnoreKeymap(e) || open) return
                e.preventDefault()
                e.stopPropagation()
                setPages([textSearchPages.searchByValue as unknown as pageList])
                setOpen(true)
                setSearch("")
            }
        })
    }, [])

    return (
        <Command.Dialog
            open={open}
        >
            <CommandPalette
                pages={pages}
                setPages={setPages}
                open={open}
                setOpen={setOpen}
                loading={loading}
                setLoading={setLoading}
                search={search}
                setSearch={setSearch}
                page={page}
            />
        </Command.Dialog>
    )
}


CommandPalettePopover.displayName = "CommandPalettePopover"


export default CommandPalettePopover;
