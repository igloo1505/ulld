import { prisma } from "@ulld/database/db"

export const getBibWithEntries = async (bibId: number = 1) => {
    return await prisma.bib.findFirst({
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
                            id: true,
                            href: true,
                        }
                    }
                }
            }
        }
    })
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



