
import { Prisma } from "@ulld/database"


export const defaultFindRemoteMdxArgs: { include: Prisma.MdxNoteInclude } = {
    include: {
        tags: true,
        subjects: true,
        citations: {
            select: {
                id: true,
                htmlCitation: true
            }
        },
        definitions: true,
        topics: true
    }
}

