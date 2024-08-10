import '@citation-js/plugin-csl'
import '@citation-js/plugin-bibtex'
import { parseBibFile } from 'bibtex'
import path from 'path'
import { Prisma } from "@ulld/database"
import { BibEntry } from '@ulld/api/classes/prismaMdxRelations/bibEntry'
import { getFormattedCslCitation } from './formatCsl'
import { prisma } from '@ulld/database/db'
import { readAppConfig } from '@ulld/developer/readAppConfig'
import { FileData } from '@ulld/utilities/fileClass'
import { ErrorResponse } from '@ulld/utilities/errorNotifications'



export const syncBib = async (bibId: number = 1) => {
    const appConfig = await readAppConfig()
    const BIBID = bibId
    const bibpath = appConfig.bibPath
    const f = new FileData(path.join(appConfig.fsRoot, bibpath))
    if(!f.exists()){
        console.warn(`Could not find a bibliography .bib file at path ${bibpath}. Your bibliography will not sync until this is resolved. Make sure to add the appropriate "bibPath" field to your appConfig.ulld.json file.`)
        return {
            errorKey: "bibPathFileDoesNotExist"
        } satisfies ErrorResponse<"bibManager">
    }
    const content = f.getContent()
    // RESUME: Fix this. The issue seems to be within the parseBibFile and BibEntry.fromFsList methods. Check to make sure they're returning and receiving the proper data.
    const parsed = parseBibFile(content)
    console.log("parsed: ", parsed)
    console.log("Object.keys(parsed): ", Object.keys(parsed))
    console.log("parsed.entries_raw: ", parsed.entries_raw)
    const entries = BibEntry.fromFsList(parsed.entries_raw)
    console.log("entries.length: ", entries.length)
    const { citations, userDefined } = getFormattedCslCitation(content, appConfig)
    const ids = citations.getIds()
    console.log("citations: ", citations)
    console.log("keyof citations: ", Object.keys(citations))
    const lower = ids.map((l: string) => l.toLowerCase())
    let connectOrCreateEntries: Prisma.BibEntryCreateOrConnectWithoutBibInput[] = []
    console.log("entries.length: ", entries.length)
    for (const entry of entries) {
        const _args = entry.connectOrCreateArgs(ids, lower)
        _args.create.htmlCitation = citations.format('bibliography', {
            format: 'html',
            template: userDefined ? "user-defined" : 'apa',
            entry: _args.create.id
        })
        connectOrCreateEntries.push(_args)
    }
    await prisma.bib.upsert({
        where: {
            id: BIBID
        },
        create: {
            filename: bibpath,
            entries: {
                connectOrCreate: connectOrCreateEntries
            }
        },
        update: {
            filename: bibpath,
            entries: {
                connectOrCreate: connectOrCreateEntries
            }
        }
    })
}
