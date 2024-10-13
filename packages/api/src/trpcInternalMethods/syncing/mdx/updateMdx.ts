// import { serverLogger } from "@ulld/logger/server"
import { prisma } from "@ulld/database/db"
import type { MdxNote } from "../../../classes/prismaMdxRelations/MdxNote"
import type { AutoSettingWithRegex } from "../../../trpc/types"


type UpdateMdxNoteReturnType = ReturnType<typeof prisma.mdxNote.upsert>


export const updateMdxNote = async (note: MdxNote, autoSettings: AutoSettingWithRegex[], config: Parameters<InstanceType<typeof MdxNote>["upsertArgs"]>[1]): Promise<UpdateMdxNoteReturnType | undefined> => {
    // serverLogger.verbose(`Updating ${note.title}`)
    const upsertArgs = note.upsertArgs(autoSettings, config)
    if (!upsertArgs) return
    const updated = await prisma.mdxNote.upsert(upsertArgs)
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
