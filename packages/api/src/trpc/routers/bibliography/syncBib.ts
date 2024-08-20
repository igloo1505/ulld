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
    const bibpath = appConfig.bibPath
    const f = new FileData(path.join(appConfig.fsRoot, bibpath))
    if(!f.exists()){
        console.warn(`Could not find a bibliography .bib file at path ${bibpath}. Your bibliography will not sync until this is resolved. Make sure to add the appropriate "bibPath" field to your appConfig.ulld.json file.`)
        return {
            errorKey: "bibPathFileDoesNotExist"
        } satisfies ErrorResponse<"bibManager">
    }
    const content = f.getContent()
    const parsed = parseBibFile(content)
    const entries = BibEntry.fromFsList(parsed.entries_raw)
    const { citations, userDefined } = getFormattedCslCitation(content, appConfig)
    let connectOrCreateEntries: Prisma.BibEntryCreateOrConnectWithoutBibInput[] = []
    const ids = citations.getIds() as string[]
    const lowerCaseIds = ids.map((x) => x.toLowerCase())
    for (const entry of entries) {
        const _args = entry.connectOrCreateArgs()
        _args.create.htmlCitation = citations.format('bibliography', {
            format: 'html',
            template: userDefined ? "user-defined" : 'apa',
            entry: entry.getIdInBibFile(ids, lowerCaseIds)
        })
        connectOrCreateEntries.push(_args)
    }
    return await prisma.bib.upsert({
        where: {
            id: bibId 
        },
        create: {
            filename: bibpath,
            entries: {
                connectOrCreate: connectOrCreateEntries
            },
            lastSync: new Date()
        },
        update: {
            filename: bibpath,
            entries: {
                connectOrCreate: connectOrCreateEntries
            },
            lastSync: new Date()
        },
        include: {
            entries: {
                include: {
                    tags: true,
                    citationGroups: true,
                    MdxNotes: {
                        select: {
                            title: true,
                            id: true,
                            href: true,
                        }
                    }
                }
            }
        }
    })
}
