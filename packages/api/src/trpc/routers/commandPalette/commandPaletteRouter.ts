import { prisma } from "@ulld/database/db";
import { publicProcedure, router } from "../../trpc";
import { z } from 'zod'
import { definitionZodObject } from "@ulld/api/classes/definitionSchema";


export const commandPaletteRouter = router({
    noteSearch: publicProcedure.query(async () => {
        let mdx = await prisma.mdxNote.findMany({
            select: {
                id: true,
                title: true,
                latexTitle: true,
                href: true,
                isProtected: true
            },
            distinct: "rootRelativePath"
        })
        let ipynb = await prisma.ipynb.findMany({
            select: {
                id: true,
                title: true,
                latexTitle: true,
                href: true,
                isProtected: true
            },
            distinct: "rootRelativePath"
        })
        return mdx.concat(ipynb)
    }),
    tagSearch: publicProcedure.query(async () => {
        return await prisma.tag.findMany({
            distinct: "value"
        })
    }),
    subjectSearch: publicProcedure.query(async () => {
        return await prisma.subject.findMany({
            distinct: "value"
        })
    }),
    equationSearch: publicProcedure.query(async () => {
        return await prisma.equation.findMany({
            select: {
                id: true,
                title: true,
                content: true
            }
        })
    }),
    getDefinitions: publicProcedure.input(z.object({
        rsc: z.boolean().default(true)
    }).optional()).query(async ({ input }) => {
        let definitions = await prisma.definition.findMany({
            select: {
                label: true,
                id: true,
                content: true,
                mdxNote: {
                    select: {
                        title: true,
                        href: true
                    }
                }
            }
        })
        let parsed = definitionZodObject.array().parse(definitions)
        // TODO: Compile mdx here with a server-side only method to speed up client side rendering.
        return parsed
    }),
    getCommandPaletteData: publicProcedure.query(async () => {
        // WARNING: Handle authentication check for protected notes here. They should only return at all if authenticated and should return with a partially blocked title
        let mdxNotes = await prisma.mdxNote.findMany({
            select: {
                title: true,
                latexTitle: true,
                href: true,
                isProtected: true
            },
            distinct: "rootRelativePath"
        })
        mdxNotes = mdxNotes.map((n) => n.isProtected ? ({ ...n, title: n.title.split("").map((c, i) => i % 2 === 0 ? c : "#").join(""), latexTitle: null }) : n)
        let ipynbNotes = await prisma.ipynb.findMany({
            select: {
                title: true,
                latexTitle: true,
                href: true,
                isProtected: true
            },
            distinct: "rootRelativePath"
        })
        let _uniqueTags = await prisma.tag.findMany({
            distinct: "value"
        })
        return {
            notes: mdxNotes.concat(ipynbNotes),
            tags: _uniqueTags
        }
    }),
})
