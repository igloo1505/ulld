import { defaultFindRemoteMdxArgs } from "@ulld/utilities/defaults/prisma/notes"
import { publicProcedure, router } from "../trpc";
import { z } from 'zod'
import { prisma } from "@ulld/database/db";
import { DictionaryDefinitionReturnType,  dictionaryDefinitionReturnType } from "../../schemas/dictionary/main";
import { TagTopicSubjectList } from "../../schemas/taggable/tagTopicSubjectList";
import { getUniqueTags, getUniqueSubjects, getUniqueTopics } from "../../trpcInternalMethods/taggable/getUniqueTaggables";
// import { getInternalConfig } from "@ulld/configschema/zod/getInternalConfig";



export const advancedSearchRouter = router({
    getNoteHrefFromDefinitionId: publicProcedure.input(z.string()).query(async ({ input }) => {
        let note = await prisma.mdxNote.findFirst({
            where: {
                definitions: {
                    some: {
                        id: input
                    }
                }
            },
            select: {
                href: true
            }
        })
        return note?.href
    }),
    getSequentialIdListByKey: publicProcedure.input(z.string()).query(async ({ input }) => {
        return await prisma.mdxNote.findMany({
            where: {
                sequentialKey: input
            },
            select: {
                title: true,
                sequentialIndex: true,
                href: true
            },
            orderBy: {
                sequentialIndex: "asc"
            }
        })
    }),
    getDefinitionList: publicProcedure.query(async () => {
        let defs = await prisma.definition.findMany({
            where: {
                label: {
                    not: null
                }
            },
            orderBy: [
                { label: "asc" },
                { id: "asc" }
            ]
        })
        let definitions: DictionaryDefinitionReturnType[] = []
        for await (const d of defs) {
            let j = await dictionaryDefinitionReturnType.parseAsync(d)
            definitions.push(j)
        }
        return definitions
    }),
    rootRelativePathIsBookmarked: publicProcedure.input(z.string()).query(async ({ input }) => {
        let res = await prisma.mdxNote.findFirst({
            where: {
                rootRelativePath: input
            },
            select: {
                bookmarked: true
            }
        })
        return Boolean(res?.bookmarked)
    }),
    getUniqueTags: publicProcedure.query(async () => {
        return await getUniqueTags()
    }),
    getUniqueTagTopicAndSubjects: publicProcedure.query(async () => {
        let d: TagTopicSubjectList = {
            tags: [],
            topics: [],
            subjects: []
        }
        d.tags = await getUniqueTags()
        d.subjects = await getUniqueSubjects()
        d.topics = await getUniqueTopics()
        return d
    }),
    getBookmarked: publicProcedure.query(async () => {
        // TODO: Support bookmarking other content types and add that here as well.
        return await prisma.mdxNote.findMany({
            where: {
                bookmarked: true
            },
            include: defaultFindRemoteMdxArgs.include
        })
    }),
    findUnknownDBNoteTypeFromRootRelativePath: publicProcedure.input(z.string()).query(async (opts) => {
        let mdx = await prisma.mdxNote.findFirst({
            where: {
                rootRelativePath: opts.input
            },
            select: {
                rootRelativePath: true,
                id: true
            }
        })
        let nb = await prisma.ipynb.findFirst({
            where: {
                rootRelativePath: opts.input
            },
            select: {
                rootRelativePath: true,
                id: true
            }
        })
        return {
            markdown: mdx,
            notebook: nb
        }
    }),
    // FIX: Move most of this NoteFilter class to the searchParam zod model with functions to apply each searchParam to various Prisma FindMany objects
    // searchAllByText: publicProcedure.input(z.string()).query(async ({input}) => {
        // const qm = new NoteFilter("all", {query: input })
            // const config = getInternalConfig()
            // await qm.getResults(config)
        // return qm.flattenForClient()
    // })
})
