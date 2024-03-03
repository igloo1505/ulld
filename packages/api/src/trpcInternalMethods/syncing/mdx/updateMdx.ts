import { prisma } from "#/db"
import { AutoSettingWithRegex } from "#/trpc/routers/sync"
import { ParsedAppConfig } from "@ulld/config"
import { logger } from "@ulld/logger/server"
import { MdxNote } from "@ulld/state"


export const updateMdxNote = async (note: MdxNote, autoSettings: AutoSettingWithRegex[] = [], config: ParsedAppConfig) => {
    logger.info(`Updating ${note.title}`)
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
