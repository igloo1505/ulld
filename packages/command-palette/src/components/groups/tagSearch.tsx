import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import CommandPaletteItem from '../commandItem'
import { Command } from 'cmdk'
import { pages } from '../commandPaletteUtilities'
import { formatSearchAllParams } from '@ulld/state/searchParamSchemas/utilities/formatSearchAllParams'


interface TagSearchCommandGroupProps {
    activePage?: pages
    close: () => void
    setLoading: (b: boolean) => void
    tagSearchCommands: { value: string, label: string }[]
    clearCommands: () => void
}

const TagSearchCommandGroup = ({ activePage, close, tagSearchCommands, clearCommands }: TagSearchCommandGroupProps) => {
    const router = useRouter()

    useEffect(() => {
        return () => clearCommands()
    }, [])

    return (
        <Command.Group heading="Tags">
            {tagSearchCommands.map((t) => {
                return <CommandPaletteItem
                    close={close}
                    key={`tag-${t.value}`}
                    parent={pages.searchTags}
                    activePage={activePage}
                    onSelect={() => {
                        let p = formatSearchAllParams({
                            tags: [t.label]
                        })
                        close()
                        router.push(`/searchAll?${p}`)
                    }}
                    value={t.value}
                >
                    {t.label}
                </CommandPaletteItem>
            })}
        </Command.Group>
    )

}


TagSearchCommandGroup.displayName = "TagSearchCommandGroup"


export default TagSearchCommandGroup;
