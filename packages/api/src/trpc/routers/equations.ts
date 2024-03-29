import { prisma } from "@ulld/database/db";
import { texToChtml } from "@ulld/parsers/math/texToChtml";
import { zodMdxFieldSchema } from "@ulld/parsers/latex/zodLatexFieldSchema";
import { mathjaxParserOptionsSchema } from "@ulld/parsers/math/mathjaxParserOptionsParsing";
import { parseMdxString } from "@ulld/parsers/mdx";
import { arrayTruthy } from "@ulld/utilities/booleanAndEqualities/arrayTruthy";
import { addEquationSchema } from "../../schemas/formTrpcRelationships/addEquation";
import { publicProcedure, router } from "../trpc";
import { Prisma } from "@prisma/client"
import * as z from 'zod'
import { getPaginationParams } from "@ulld/state/searchParamSchemas/pagination/main";
import { equationSearchParamsSchema } from "@ulld/state/searchParamSchemas/equations/main";


const getCssCompiler = async () => await import("@ulld/parsers/sassCompiler").then((a) => ({
    compileSassString: a.compileSassString,
    wrapCssWithSpecifier: a.wrapCssWithSpecifier
}))


const getMathStringToLatex = async () => await import("@ulld/parsers/math/mathStringToLatex").then((a) => a.mathStringToLatex)


export const equationsRouter = router({
    getEquationById: publicProcedure.input(z.object({
        id: z.number().int().optional(),
        equationId: z.string().optional()
    })).mutation(async ({ input }) => {
        return await prisma.equation.findFirst({
            where: {
                OR: [
                    { id: input.id },
                    { equationId: input.equationId },
                ]
            },
            select: {
                id: true,
                title: true,
                desc: true,
                content: true,
                equationId: true,
                asPython: true,
                keywords: true,
                relatedValues: {
                    select: {
                        input: true,
                        output: true
                    }
                },
                variables: true,
                tags: {
                    select: {
                        value: true
                    }
                }
            },
        })
    }),
    getParsedEquationById: publicProcedure.input(z.object({
        id: z.number().int(),
        equationId: z.string().optional(),
        desc: z.object({
            options: mathjaxParserOptionsSchema,
            appendStylesToId: z.string().optional(),
            appendStylesToClass: z.string().optional(),
        }),
        title: z.object({
            options: mathjaxParserOptionsSchema,
            appendStylesToId: z.string().optional(),
            appendStylesToClass: z.string().optional(),
        }),
        content: z.object({
            options: mathjaxParserOptionsSchema,
            appendStylesToId: z.string().optional(),
            appendStylesToClass: z.string().optional(),
        }),
    })).mutation(async ({ input }) => {
        const mathStringToLatex = await getMathStringToLatex()
        let eq = await prisma.equation.findFirst({
            where: {
                OR: [
                    { id: input.id },
                    { equationId: input.equationId }
                ]
            },
            select: {
                id: true,
                title: true,
                desc: true,
                content: true,
                equationId: true,
                asPython: true,
                keywords: true,
                relatedValues: {
                    select: {
                        input: true,
                        output: true
                    }
                },
                variables: true,
                tags: {
                    select: {
                        value: true
                    }
                }
            },
        })
        let desc = eq?.desc ? await zodMdxFieldSchema.parseAsync(eq.desc) : undefined
        let title = eq?.title ? await zodMdxFieldSchema.parseAsync(eq.title) : undefined
        let content = eq?.content ? await mathStringToLatex(eq.content, input.content.options, input.content.appendStylesToId, input.content.appendStylesToClass) : undefined
        return {
            eq,
            desc,
            title,
            content
        }
    }),
    getEquationEmbedProps: publicProcedure.input(z.object({
        equationId: z.string(),
        options: mathjaxParserOptionsSchema,
        appendStylesToId: z.string().optional(),
        appendStylesToClass: z.string().optional(),
    })).query(async ({ input }) => {
        let eq = await prisma.equation.findFirst({
            where: {
                equationId: input.equationId
            },
            select: {
                id: true,
                equationId: true,
                content: true,
                asPython: true
            }
        })
        const mathStringToLatex = await getMathStringToLatex()
        let content = eq?.content ? await mathStringToLatex(eq.content, input.options, input.appendStylesToId, input.appendStylesToClass) : {
            content: undefined,
            styles: undefined
        }
        return {
            ...eq,
            contentLatex: eq?.content,
            content
        }
    }),
    deleteEquationById: publicProcedure.input(z.number().int()).mutation(async (opts) => {
        return await prisma.equation.delete({
            where: {
                id: opts.input
            }
        })
    }),
    getEquationsList: publicProcedure.input(equationSearchParamsSchema).query(async ({ input }) => {
        let _filters: Prisma.EquationWhereInput[] = []
        if (input.query) {
            _filters.push({
                title: {
                    search: input.query,
                    mode: "insensitive"
                }
            })
            _filters.push({
                desc: {
                    search: input.query,
                    mode: "insensitive"
                },
            })
            _filters.push({
                keywords: {
                    hasSome: input.query.toLowerCase().split(" ")
                }
            })
        }

        if (arrayTruthy(input.variables)) {
            _filters.push({
                variables: {
                    hasSome: input.variables
                }
            })
        }
        if (arrayTruthy(input.tags)) {
            _filters.push({
                tags: {
                    some: {
                        value: {
                            in: input.tags
                        }
                    }
                }
            })
        }
        let _orderBy: Prisma.EquationOrderByWithRelationAndSearchRelevanceInput[] = []
        input.orderBy === "title" && (_orderBy.push({ title: input.sortDir || "desc" }))
        input.orderBy === "createdAt" && (_orderBy.push({ createdAt: input.sortDir || "desc" }))
        let equations = await prisma.equation.findMany({
            where: {
                AND: _filters
            },
            orderBy: _orderBy,
            ...getPaginationParams({
                take: input.take,
                page: input.page
            })
        })
        let tags: string[] = []
        let variables: string[] = []

        const _eq = await prisma.equation.findMany({
            select: {
                tags: {
                    select: {
                        value: true
                    }
                },
                variables: true
            },
        })

        _eq.forEach((eq) => {
            eq.tags.forEach((t) => {
                if (!tags.includes(t.value)) {
                    tags.push(t.value)
                }
            })
            eq.variables.forEach((v) => {
                if (!variables.includes(v)) {
                    variables.push(v)
                }
            })
        })

        return {
            equations,
            tags,
            variables
        }
    }),
    addEquation: publicProcedure.input(addEquationSchema).mutation(async ({ input }) => {
        const _create: Prisma.EquationCreateInput = {
            equationId: input.equationId,
            title: input.title,
            desc: input.desc,
            content: input.content,
            asPython: input.asPython,
            variables: input.variables,
            keywords: input.keywords.map((k) => k.toLowerCase()),
            tags: {
                connectOrCreate: input.tags.map((t) => ({
                    where: {
                        value: t
                    },
                    create: {
                        value: t
                    }
                }))
            }
            // TODO: Come back and handle the variableLegend and relatedValues input entirely. It's currently not implemented in the form or this prisma method, but it is part of the DB schema already.
            // variableLegend: input.variableLegend,
            // relatedValues: {
            //                 connectOrCreate: 
            //             },

        }
        return await prisma.equation.upsert({
            where: {
                id: input.id || -1
            },
            create: _create,
            update: _create
        })
    }),
    mathStringToLatex: publicProcedure.input(z.object({
        content: z.string(),
        options: mathjaxParserOptionsSchema,
        appendStylesToId: z.string().optional(),
        appendStylesToClass: z.string().optional()
    })).mutation(async (opts) => {
        const mathStringToLatex = await getMathStringToLatex()
        return await mathStringToLatex(opts.input.content, opts.input.options, opts.input.appendStylesToId, opts.input.appendStylesToClass)
    }),
    mathStringArrayToLatex: publicProcedure.input(z.object({
        content: z.string().array(),
        options: mathjaxParserOptionsSchema,
        appendStylesToId: z.string().optional(),
        appendStylesToClass: z.string().optional()
    })).mutation(async (opts) => {
        const { compileSassString, wrapCssWithSpecifier } = await getCssCompiler()
        let data: { content: string, styles?: string }[] = []
        for await (const s of opts.input.content) {
            let res = await texToChtml(s, opts.input.options)
            const _styles = res.styles ? Boolean(opts.input.appendStylesToId || opts.input.appendStylesToClass) ? await compileSassString(wrapCssWithSpecifier(res.styles, opts.input.appendStylesToId, opts.input.appendStylesToClass)) : res.styles : undefined
            data.push({
                content: res.content,
                styles: typeof _styles === "string" ? _styles : _styles?.css
            })
        }
        return data
    }),
    getIdFromEquationId: publicProcedure.input(z.string()).query(async (opts) => {
        return await prisma.equation.findFirst({
            where: {
                equationId: opts.input
            },
            select: {
                id: true
            }
        })
    }),
    zodParseLatexString: publicProcedure.input(z.union([
        z.string(),
        z.string().array()
    ]).transform((a) => Array.isArray(a) ? a : [a])).mutation(async ({ input }) => {
        return await zodMdxFieldSchema.array().parseAsync(input)
    })
})
