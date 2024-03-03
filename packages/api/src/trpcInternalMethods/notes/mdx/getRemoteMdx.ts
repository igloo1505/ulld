import { prisma } from "#/db"
import { defaultFindRemoteMdxArgs } from "@ulld/utilities"

export const getRemoteMdx = async (rootRelativePath: string) => {
    let note = await prisma.mdxNote.findFirst({
        where: {
            rootRelativePath: rootRelativePath
        },
        ...defaultFindRemoteMdxArgs
    })
    return note
}


