"use client"
import React, { useState, useEffect } from 'react'
import BibTable from './bibTable'
import BibliographySheet from './bibPageSheet'
import { ReduxProvider } from '@ulld/state/reduxProvider'
import { useToast } from '@ulld/tailwind/use-toast'
import {  Button } from '@ulld/tailwind/button'
/* import { BibEntry } from '@ulld/database/internalDatabaseTypes' */
import { BibCore } from '@ulld/api/classes/prismaMdxRelations/Bib'
import { client } from '@ulld/api/client'
import { BibWithEntries } from '@ulld/api/trpcInternalMethods/bib/main'
import { BibEntryDataTableOutput, BibEntry } from '@ulld/api/classes/prismaMdxRelations/bibEntry'
import { DynamicIcon } from '../icons/DynamicIcon'
import LoadingIndicator from '../loading/loadingIndicator'


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
        let newBib = await client.bibliography.syncBibServerSide.mutate(bib?.id || undefined)
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
