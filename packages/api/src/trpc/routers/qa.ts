import { Prisma } from "@prisma/client"
import { z } from "zod"
import { publicProcedure, router } from "../trpc"
import { prisma } from "@ulld/database"
import { saveQaItem } from "../../trpcInternalMethods"
import { qaInputSchemaTrpc } from "../../schemas"


export const qaRouter = router({
    saveQA: publicProcedure.input(qaInputSchemaTrpc).mutation(async (opts) => {
        return await saveQaItem(opts.input)
    }),
    getSpecificQA: publicProcedure.input(z.string()).query(async (opts) => {
        return await prisma.qAPair.findFirst({
            where: {
                id: opts.input
            },
            include: {
                tags: true,
                topics: true,
                subjects: true
            }
        })
    }),
    addQAResult: publicProcedure.input(z.object({
        id: z.string(),
        success: z.boolean()
    })).mutation(async (opts) => {
        let item = await prisma.qAPair.findFirst({
            where: {
                id: opts.input.id
            },
            select: {
                correctCount: true,
                inCorrectCount: true
            }
        })
        if (!item) return
        return await prisma.qAPair.update({
            where: {
                id: opts.input.id
            },
            data: {
                ...(opts.input.success && { correctCount: item.correctCount + 1 }),
                ...(!opts.input.success && { inCorrectCount: item.inCorrectCount + 1 }),
            }
        })
    }),
    getQaAutocompleteOptions: publicProcedure.query(async (opts) => {
        let data = await prisma.qAPair.findMany({
            select: {
                tags: true,
                subjects: true,
                topics: true
            }
        })

        let tagOptions: string[] = []
        data.forEach((d) => {
            if (d.tags) {
                tagOptions = tagOptions.concat(d.tags.map((t) => t.value))
            }
            if (d.subjects) {
                tagOptions = tagOptions.concat(d.subjects.map((t) => t.value))
            }
            if (d.topics) {
                tagOptions = tagOptions.concat(d.topics.map((t) => t.value))
            }
        })
        let _options: string[] = []
        for (const k of tagOptions) {
            if (!_options.includes(k)) {
                _options.push(k)
            }
        }
        return _options
    }),
    getQaExam: publicProcedure.input(z.object({
        tags: z.string().array().optional(),
        topics: z.string().array().optional(),
        subjects: z.string().array().optional(),
    })).query(async (opts) => {
        let p = opts.input
        let or: Prisma.QAPairWhereInput[] = []
        if (p.tags) {
            or.push(
                {
                    tags: {
                        some: {
                            value: {
                                in: p.tags
                            }
                        }
                    }
                }
            )
        }
        if (p.subjects) {
            or.push(
                {
                    subjects: {
                        some: {
                            value: {
                                in: p.subjects
                            }
                        }
                    }
                }
            )
        }
        if (p.topics) {
            or.push(
                {
                    topics: {
                        some: {
                            value: {
                                in: p.topics
                            }
                        }
                    }
                }
            )
        }
        let qa = await prisma.qAPair.findMany({
            where: {
                OR: or
            }
        })
        let res = qa as (typeof qa[number] & { randomId: number })[]
        if (qa) {
            res = res.map((q) => ({ ...q, randomId: Math.random() })).sort((a, b) => a.randomId - b.randomId)
        }
        return res
    })
})
