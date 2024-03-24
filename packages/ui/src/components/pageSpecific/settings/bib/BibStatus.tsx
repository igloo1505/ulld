import React, { useState } from 'react'
import SettingsPhotoInput from '../photoInput'
import { DropEvent, DropzoneOptions } from 'react-dropzone'
import clsx from 'clsx'
import { Button } from '@ulld/tailwind/button'
import { prisma } from '@ulld/database/db'
import FileInputList from '../../../inputs/fileList'
import { CalendarAndDateManager } from '@ulld/api/classes/data/calendarAndDate'
import { BibCore } from '@ulld/api/classes/prismaMdxRelations/Bib'
import { BibWithEntries } from '@ulld/api/trpcInternalMethods/bib/main'


export interface BibStatusProps {
    fileExists: boolean
    prismaBib: BibWithEntries
    lastBibSync?: Date | string | null
}


const BibStatus = ({ prismaBib, fileExists, lastBibSync }: BibStatusProps) => {
    const [fileValue, setFileValue] = useState<File[] | null>(null)
    const getBibClass = async () => {
        let bib: BibCore = null! as BibCore
        if (prismaBib) {
            bib = BibCore.fromPrisma(prismaBib)
            bib.readFile(prismaBib.filename)
        }
        if (!prismaBib) {
            bib = new BibCore()
        }
        return bib
    }

    const handleFiledrop: DropzoneOptions['onDrop'] = (accepted, rejected, e: DropEvent) => {
        fileValue ? setFileValue([...fileValue, ...accepted]) : setFileValue(accepted)
    }

    const Sync = async () => {
        let bib = await getBibClass()
        if (fileValue) {
            for await (const [i, f] of fileValue.entries()) {
                bib.readFileObject(f, true, i == fileValue.length - 1 ? async () => {
                    await prisma.bib.upsert(bib.upsertArgs())
                } : undefined)
            }
        } else {
            await prisma.bib.upsert(bib.upsertArgs())
        }
    }

    const removeByFilename = (filename: string) => {
        if (!fileValue) return
        setFileValue(fileValue.filter((v) => v.name !== filename))
    }


    return (
        <div className={"flex flex-col justify-center items-center gap-4"}>
            {lastBibSync && <div id={"bib-sync-date-settings"}>{`Last synchronized on ${CalendarAndDateManager.formatDate(lastBibSync, true)}`}</div>}
            <div className={clsx("flex flex-col md:flex-row")}>
                <div className={"px-8 py-6"}>
                    <SettingsPhotoInput
                        filetypeText=".bib"
                        fileValue={fileValue}
                        dropzone={{
                            onDrop: handleFiledrop,
                            accept: {
                                "text/plain": [".bib", ".bibtex"]
                            },
                        }}
                    />
                </div>
                <FileInputList files={fileValue} removeItem={removeByFilename} />
            </div>
            <div className={""}>
                <Button onClick={Sync}>
                    Synchronize Bibliography
                </Button>
            </div>
        </div>
    )
}


BibStatus.displayName = "BibStatus"


export default BibStatus;
