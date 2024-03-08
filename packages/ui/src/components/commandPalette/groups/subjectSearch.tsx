import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import CommandPaletteItem from '../commandItem'
import { Command } from 'cmdk'
import { pages } from '../commandPaletteUtilities'
import { formatSearchAllParams } from '@ulld/state'


interface SubjectSearchCommandGroupProps {
    activePage?: pages
    close: () => void
    setLoading: (b: boolean) => void
    subjectSearchCommands: { value: string, label: string }[]
    clearCommands: () => void
}

const SubjectSearchCommandGroup = ({ activePage, close, subjectSearchCommands, clearCommands }: SubjectSearchCommandGroupProps) => {
    const router = useRouter()

    useEffect(() => {
        return () => clearCommands()
    }, [])

    return (
        <Command.Group heading="Subjects">
            {subjectSearchCommands.map((t) => {
                return <CommandPaletteItem
                    close={close}
                    key={`subject-${t.value}`}
                    parent={pages.searchSubjects}
                    activePage={activePage}
                    onSelect={() => {
                        let p = formatSearchAllParams({
                            subjects: [t.label]
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


SubjectSearchCommandGroup.displayName = "SubjectSearchCommandGroup"


export default SubjectSearchCommandGroup;
