import { ParsedAppConfig } from "@ulld/configschema/types"
import { serverLogger } from "@ulld/logger/server"
import { AutoSettingWithRegex } from "../../../trpc/types"
import { MdxNote } from "../../../classes/prismaMdxRelations/MdxNote"
import { prisma } from "@ulld/database/db"






export const saveMdxNote = async (note: MdxNote, autoSettings: AutoSettingWithRegex[] = [], config: ParsedAppConfig) => {
    serverLogger.info(`Creating note: ${note.title}`)
    if (!note.title) {
        serverLogger.info(`No Note Title Found: ${JSON.stringify(note, null, 4)}`)
    }
    const createArgs = note.createArgs(autoSettings, config)
    if (!createArgs) return
    let saved = await prisma.mdxNote.create(createArgs)
    if (note.definitions?.length > 0) {
        for await (const d of note.definitions) {
            let alphabetical = await d.getAlphabeticalLabel()
            await prisma.definition.upsert({
                where: {
                    id: d.id
                },
                create: {
                    id: d.id,
                    label: d.label,
                    content: d.content,
                    mdxNoteId: saved.id,
                    alphabeticalLabel: alphabetical
                },
                update: {
                    label: d.label,
                    content: d.content,
                    mdxNoteId: saved.id,
                    alphabeticalLabel: alphabetical
                }
            })
        }
    }
    return saved
}

