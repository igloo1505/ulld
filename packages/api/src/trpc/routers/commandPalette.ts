import { prisma } from "#/db";
import { MDXSerializeReturnType, serializeMdxContent } from "@ulld/parsers";
import { publicProcedure, router } from "../trpc";
import { z } from 'zod'


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
        let data: (Omit<NonNullable<typeof definitions>[number], "content"> & { content: MDXSerializeReturnType })[] = []
        for await (const d of definitions) {
            if (d.content) {
                let newContent = await serializeMdxContent(d.content, typeof input?.rsc === "boolean" ? input.rsc : true)
                data.push({
                    ...d,
                    content: newContent
                })
            }
        }
        return data
    })
})
