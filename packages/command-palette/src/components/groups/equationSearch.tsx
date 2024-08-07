import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import CommandPaletteItem from '../commandItem'
import { Command } from 'cmdk'
import { pages } from '../commandPaletteUtilities'
import { MdxContentCLIENT } from '@ulld/render/mdx'
import { EquationSearchResult } from '@ulld/api/types'


export type EquationCmdItem = EquationSearchResult[number] & { value: string }

interface EquationSearchCommandGroupProps {
    activePage?: pages
    close: () => void
    equationSearchCommands: EquationCmdItem[]
    clearCommands: () => void
}


const EquationSearchCommandGroup = ({ activePage, equationSearchCommands, close, clearCommands }: EquationSearchCommandGroupProps) => {
    const router = useRouter()

    useEffect(() => {
        return () => clearCommands()
    }, [])

    return (
        <Command.Group value="equations" heading="Equations">
            {equationSearchCommands.map((eq) => {
                return <CommandPaletteItem
                    close={close}
                    key={`eq-${eq.id}`}
                    parent={pages.searchEquations}
                    activePage={activePage}
                    onSelect={() => {
                        close()
                        router.push(`/equations/details/${eq.id}`)
                    }}
                    value={eq.value}
                >
                    <MdxContentCLIENT
                        stylesId={`equation-${eq.id}`}
                        content={eq.title}
                        inline
                    />
                </CommandPaletteItem>
            })}
        </Command.Group>
    )


}


EquationSearchCommandGroup.displayName = "EquationSearchCommandGroup"


export default EquationSearchCommandGroup;
