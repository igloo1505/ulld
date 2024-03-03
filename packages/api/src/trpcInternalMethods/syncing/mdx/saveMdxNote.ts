import { prisma } from "#/db"
import { AutoSettingWithRegex } from "#/trpc/routers/sync"
import { ParsedAppConfig } from "@ulld/config"
import { MdxNote } from "@ulld/state"
import { logger } from "@ulld/logger/server"

export const saveMdxNote = async (note: MdxNote, autoSettings: AutoSettingWithRegex[] = [], config: ParsedAppConfig) => {
    logger.info(`Creating note: ${note.title}`)
    if (!note.title) {
        logger.info(`No Note Title Found: ${JSON.stringify(note, null, 4)}`)
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

