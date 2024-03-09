import { prisma, Prisma } from "@ulld/database"

export const getBibWithEntries = async (bibId?: number) => {
    let res1 = await prisma.bib.findFirst({
        ...(bibId && {
            where: {
                id: bibId
            }
        }),
        include: {
            entries: {
                include: {
                    tags: true,
                    citationGroups: true,
                    MdxNotes: {
                        select: {
                            title: true,
                            href: true,
                        }
                    }
                }
            }
        }
    })
    return res1
}


export const getBibItemWithAll = async (id: string) => {
    return await prisma.bibEntry.findFirst({
        where: {
            id: id
        },
        include: {
            tags: true,
            citationGroups: true
        }
    })
}



export const getBibFilename = async (input?: number) => {
    let res1 = await prisma.bib.findMany({
        select: {
            filename: true
        }
    })
    if (res1.length === 1) {
        return res1[0]
    }
    let bib = await prisma.bib.findFirst({
        where: {
            id: input || 1
        },
        select: {
            filename: true
        }
    })
    return bib?.filename
}



export type BibWithEntries = Prisma.PromiseReturnType<typeof getBibWithEntries>
