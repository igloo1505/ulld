import '@citation-js/plugin-csl'
import '@citation-js/plugin-bibtex'
import { parseBibFile } from 'bibtex'
import path from 'path'
import fs from 'fs'
import { getInternalConfig } from '@ulld/configschema/zod/getInternalConfig'
import { BibEntry } from '@ulld/api/classes/prismaMdxRelations/bibEntry'
import { getFormattedCslCitation } from './formatCsl'
import { prisma } from '@ulld/database/db'




export const syncBib = async (bibId?: number) => {
    const internalConfig = getInternalConfig()
    const BIBID = bibId || 1
    const bibpath = internalConfig.bibPath
    const p = path.join(internalConfig.fsRoot, bibpath)
    const content = fs.readFileSync(p, { encoding: "utf-8" })
    const parsed = parseBibFile(content)
    const entries = BibEntry.fromFsList(parsed.entries_raw)
    const entriesCC = entries.map((e) => e.connectArgs())
    const { citations, userDefined } = getFormattedCslCitation(content)
    const ids = citations.getIds()
    const lower = ids.map((l: string) => l.toLowerCase())
    for (const entry of entries) {
        const _create = entry.createInput()
        const _id = ids[lower.indexOf(entry.id)]
        const citation = citations.format('bibliography', {
            format: 'html',
            template: userDefined ? "user-defined" : 'apa',
            entry: _id
        })
        await prisma.bibEntry.upsert({
            where: entry.whereUniqueInput(),
            create: {
                ..._create,
                ...(citation && _id && { htmlCitation: citation })
            },
            update: {
                ..._create,
                ...(citation && _id && { htmlCitation: citation })
            },
        })
    }
    return await prisma.bib.upsert({
        where: {
            id: BIBID
        },
        create: {
            filename: bibpath,
            entries: {
                connect: entriesCC
            }
        },
        include: {
            entries: true
        },
        update: {
            entries: {
                connect: entriesCC
            }
        }
    })
}
