import { z } from "zod"
import { publicProcedure, router } from "../trpc"
import { prisma } from "@ulld/database"
import { readingListContentTypeSchema } from "../../schemas"



export const readingListRouter = router({
    addToReadingList: publicProcedure.input(z.object({
        type: readingListContentTypeSchema,
        readingListName: z.string().default("default"),
        itemId: z.union([z.string(), z.number()])
    })).mutation(async (opts) => {
        return await prisma.readingList.upsert({
            where: {
                name: opts.input.readingListName
            },
            create: {
                name: opts.input.readingListName,
                ...(opts.input.type === "BibEntry" && {
                    bibEntries: {
                        connect: {
                            id: opts.input.itemId as string
                        }
                    }
                }),
                ...(opts.input.type === "MdxNote" && {
                    mdxNotes: {
                        connect: {
                            id: opts.input.itemId as number
                        }
                    }
                })
            },
            update: {
                ...(opts.input.type === "BibEntry" && {
                    bibEntries: {
                        connect: {
                            id: opts.input.itemId as string
                        }
                    }
                }),
                ...(opts.input.type === "MdxNote" && {
                    mdxNotes: {
                        connect: {
                            id: opts.input.itemId as number
                        }
                    }
                })
            }
        })
    }),
    getReadingListContent: publicProcedure.input(z.string()).query(async (opts) => {
        return await prisma.readingList.findFirst({
            where: {
                name: opts.input
            },
            include: {
                bibEntries: {
                    include: {
                        citationGroups: true,
                        tags: true,
                        MdxNotes: true
                    }
                }
            }
        })
    }),
})
