import { prisma } from "@ulld/database/db";
import { NoteTypeOverview, locationDataItem } from "./formatLocationDataZodSchema"
import { DocTypes } from "@ulld/configschema/configUtilityTypes/docTypes"
import { DocumentTypeConfig } from "@ulld/configschema/zod/documentConfigSchema";
import { getInternalConfig } from '@ulld/configschema/zod/getInternalConfig'
import { ParsedAppConfig } from '@ulld/configschema/types'

export type NoteTypeOverviewList = { [k in keyof DocTypes | "Dream"]: NoteTypeOverview }


export type NoteTypeOverviewTemp = ({
    notes: {
        noteType: string;
        bookmarked: boolean;
        lastSync: Date;
    }[]
    lastSync: number
}) & DocumentTypeConfig

export const formatLocationData = async (_config?: ParsedAppConfig): Promise<NoteTypeOverview[]> => {
    const config = _config || getInternalConfig(_config)
    let bookmarks = 0

    const notes = await prisma.mdxNote.findMany({
        select: {
            noteType: true,
            bookmarked: true,
            lastSync: true
        }
    })

    let map: {
        [k in DocTypes]: NoteTypeOverviewTemp
    } = {
    } as {
            [k in DocTypes]: NoteTypeOverviewTemp
        }
    config.noteTypes.forEach((n) => {
        map[n.docType as DocTypes] = {
            ...n,
            notes: [],
            lastSync: 0
        }
    })

    notes.forEach((n) => {
        const item = locationDataItem.parse(n)
        const vo = item.lastSync.valueOf()
        map[item.noteType as DocTypes].notes.push(item)
        if (map[item.noteType as DocTypes].lastSync < vo) {
            map[item.noteType as DocTypes].lastSync < vo
        }
        if (item.bookmarked) bookmarks++
    })

    let data: NoteTypeOverview[] = Object.keys(map).map((k) => ({
        ...map[k as DocTypes],
        url: map[k as DocTypes].url,
        totalNotes: map[k as DocTypes].notes.length,
        lastUpdated: new Date(map[k as DocTypes].lastSync)
    }))

    return data
}
