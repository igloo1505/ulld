import { prisma } from "#/db";
import type { Prisma } from '@prisma/client'



export const saveSnippet = async (data: Prisma.SnippetCreateInput & { id?: number | null }) => {
    let success = data.id ? await prisma.snippet.update({
        where: {
            id: data.id
        },
        data: data as Prisma.SnippetUpdateInput
    }) : await prisma.snippet.create({
        data: data as Prisma.SnippetCreateInput
    })
    return Boolean(success)
}
