import { prisma } from "@ulld/database/db"
import { serverLogger } from "@ulld/logger/server"
import type { AutoSettingWithRegex } from "../../../trpc/types"
import type { MdxNote } from "../../../classes/prismaMdxRelations/MdxNote"


type SaveMdxReturnType = ReturnType<typeof prisma.mdxNote.create>


export const saveMdxNote = async (note: MdxNote, autoSettings: AutoSettingWithRegex[], config: Parameters<InstanceType<typeof MdxNote>["createArgs"]>[1]): Promise<SaveMdxReturnType | undefined>  => {
    serverLogger.info(`Creating note: ${note.title}`)
    if (!note.title) {
        serverLogger.info(`No Note Title Found: ${JSON.stringify(note, null, 4)}`)
    }

    const createArgs = note.createArgs(autoSettings, config)

    if (!createArgs) return
    const saved = await prisma.mdxNote.create(createArgs)
    if (note.definitions.length > 0) {
        for await (const d of note.definitions) {
            const alphabetical = await d.getAlphabeticalLabel()
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

