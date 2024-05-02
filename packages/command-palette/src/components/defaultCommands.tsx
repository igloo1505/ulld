"use client"
import React from 'react'
import CommandPaletteItem from './commandItem'
import { Command } from "cmdk"
import { useRouter } from 'next/navigation'
import { pages, textSearchPages } from './commandPaletteUtilities'
import { defaultCommandList } from './commandLists/default'
import { getSearchAllUrl } from '@ulld/state/searchParamSchemas/utilities/formatSearchAllParams'



interface DefaultCommandPaletteItemsProps {
    setPage: (s: pages) => void
    activePage?: pages
    close: () => void
    search: string
}




const DefaultCommandPaletteItems = ({ setPage, close, activePage, search }: DefaultCommandPaletteItemsProps) => {
    const router = useRouter()

    const textSearchFuncMap: { [k in textSearchPages]: (v: string) => void } = {
        fullTextSearch: async (v: string) => {
            close()
            router.push(getSearchAllUrl({ query: v }))
        },
        searchByValue: (v: string) => {
            let params = new URLSearchParams()
            params.set("value", v)
            close()
            router.push(`/valueTable?${params.toString()}`)
        }
    }

    return (
        <Command.Group heading="General">
            {defaultCommandList.map((d, i) => {
                return <CommandPaletteItem
                    key={`cmd-${i}`}
                    activePage={activePage}
                    close={close}
                    setPage={setPage}
                    {...d}
                >
                    {d.label}
                </CommandPaletteItem>
            })}
            {activePage && activePage in textSearchPages && <Command.Item
                value={search}
                onSelect={textSearchFuncMap[activePage as unknown as textSearchPages]}
            >
                {search}
            </Command.Item>}
        </Command.Group>
    )
}


DefaultCommandPaletteItems.displayName = "DefaultCommandPaletteItems"


export default DefaultCommandPaletteItems;
