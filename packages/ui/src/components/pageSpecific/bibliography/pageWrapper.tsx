"use client"
import React, { useState, useEffect } from 'react'
import BibTable from './bibTable'
import BibliographySheet from './bibPageSheet'
import { Button } from '#/components/shad/ui/button'
import DynamicIcon from '#/components/icons/DynamicIcon'
import { BibWithEntries } from '#/types/prisma/includeTypes'
import LoadingIndicator from '#/components/ui/loadingIndicator'
import { BibEntry, BibEntryDataTableOutput } from '#/classes/prismaMdxRelations/BibEntry'
import { BibCore } from '#/classes/prismaMdxRelations/Bib'
import { client } from '#/trpc/client'
import { useToast } from '#/components/shad/ui/use-toast'
import ReduxProvider from '#/state/ReduxProvider'


interface BibliographyPageWrapperProps {
    prismaBib: BibWithEntries
}


const BibliographyPageWrapper = ({ prismaBib }: BibliographyPageWrapperProps) => {
    const [activeItem, setActiveItem] = useState<BibEntry | undefined>(undefined)
    const [tableItems, setTableItems] = useState<BibEntryDataTableOutput[] | null>(null)
    const [bib, setBib] = useState<BibCore | null>(null)
    const { toast } = useToast()
    const _setBibItems = async () => {
        if (prismaBib) {
            let _bib = BibCore.fromPrisma(prismaBib)
            setTableItems(_bib.toDataTable())
            setBib(_bib)
        }
    }
    useEffect(() => {
        _setBibItems()
    }, [])


    const syncBib = async () => {
        if (!bib) return
        await bib.readFile()
        let newBib = await client.syncBibServerSide.mutate(bib?.id || undefined)
        const newEntries = newBib.entries.map((e) => BibEntry.fromPrisma(e).toDataTable())
        setTableItems(newEntries)
        toast({
            title: "Success",
            description: "Bibliography has been synced from file system."
        })
    }

    return (
        <div className={""}>
            <div className={"flex flex-row justify-between items-center"}>
                <ReduxProvider>
                    <BibliographySheet item={activeItem} close={() => setActiveItem(undefined)} />
                </ReduxProvider>
                <div className={"w-fit flex flex-row justify-center items-center gap-2"}>
                    <DynamicIcon name="bibliography" />
                    <h1 className={"text-2xl"}>Bibliography</h1>
                </div>
                {bib && <Button onClick={syncBib}>
                    Sync
                </Button>}
            </div>
            {tableItems ?
                <BibTable bibEntries={tableItems} setActiveItem={(id: string) => {
                    if (!bib) return
                    let selected = bib.findEntryById(id)
                    setActiveItem(selected)
                }} />
                : <LoadingIndicator />
            }
        </div>
    )
}


BibliographyPageWrapper.displayName = "BibliographyPageWrapper"


export default BibliographyPageWrapper;
