import { serverLogger } from "@ulld/logger/server"
import { MdxNote } from "../../../classes"
import { prisma } from "@ulld/database"
import { ParsedAppConfig } from "@ulld/configschema"
import { AutoSettingWithRegex } from "../../../trpc"




export const updateMdxNote = async (note: MdxNote, autoSettings: AutoSettingWithRegex[] = [], config: ParsedAppConfig) => {
    serverLogger.info(`Updating ${note.title}`)
    let upsertArgs = note.upsertArgs(autoSettings, config)
    if (!upsertArgs) return
    let updated = await prisma.mdxNote.upsert(upsertArgs)
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
                    mdxNoteId: note.id,
                    alphabeticalLabel: alphabetical
                },
                update: {
                    label: d.label,
                    content: d.content,
                    mdxNoteId: note.id,
                    alphabeticalLabel: alphabetical
                }
            })
        }
    }
    return updated
}
