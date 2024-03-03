import { publicProcedure, router } from "../trpc"
import { prisma } from "#/db"
import { z } from "zod"
import { getFsNote } from "#/trpcInternalMethods/filesystem/fsnotes"



export const universalNoteRouter = router({
    getSummaryOfAllNotes: publicProcedure.query(async () => {
        return await prisma.mdxNote.findMany({
            select: {
                title: true,
                tags: true,
                summary: true,
                subjects: true,
                _count: true
            }
        })
    }),
    getNoteIdByHref: publicProcedure.input(z.string()).query(async (opts) => {
        let mdx = await prisma.mdxNote.findFirst({
            where: {
                href: opts.input
            },
            select: {
                id: true
            }
        })
        let ipynb = await prisma.ipynb.findFirst({
            where: {
                href: opts.input
            },
            select: {
                id: true
            }
        })
        return mdx ? mdx.id : ipynb ? ipynb.id : null
    }),
    getFsNoteOfUnknownFormat: publicProcedure.input(z.string()).query(async (opts) => {
        return await getFsNote(opts.input)
    }),
    getQuickLinkHref: publicProcedure.input(z.string()).query(async (opts) => {
        return await prisma.mdxNote.findFirst({
            where: {
                quickLink: opts.input
            },
            select: {
                href: true
            }
        })
    }),
})
