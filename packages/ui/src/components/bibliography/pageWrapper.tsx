"use client"
import React, { useState, useEffect } from 'react'
import BibTable from './bibTable'
import BibliographySheet from './bibPageSheet'
import { BibWithEntries, BibEntryDataTableOutput, BibCore, client, BibEntry } from '@ulld/api'
import { ReduxProvider } from '@ulld/state'
import { useToast, Button } from '@ulld/tailwind'
import { LoadingIndicator } from '../..'
import DynamicIcon from '../../icons/DynamicIcon'


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
