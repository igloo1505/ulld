import { prisma } from "@ulld/database/db";
import { mathjaxParserOptionsSchema } from "@ulld/parsers/math/mathjaxParserOptionsParsing";
import { arrayTruthy } from "@ulld/utilities/booleanAndEqualities/arrayTruthy";
import { addEquationSchema } from "./addEquation";
import { publicProcedure, router } from "@ulld/api";
import { Prisma } from "@ulld/database/internalDatabaseTypes"
import * as z from 'zod'
import { getPaginationParams } from "@ulld/state/searchParamSchemas/pagination/main";
import { equationSearchParamsSchema } from "@ulld/state/searchParamSchemas/equations/main";
import { equationItemSchema } from "./equationItemSchema";
import { autoWrapMathDisplayField, autoWrapMathInlineField } from "@ulld/utilities/autoWrapMathSchemas";



const equationsRouter = router({
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
        return equationItemSchema.parseAsync(eq)
    }),
    getEquationEmbedProps: publicProcedure.input(z.object({
        equationId: z.string(),
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
        let data = await equationItemSchema.parseAsync(eq)
        return {
            ...data,
            rawLatex: eq?.content as string
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
    mathStringArrayToLatex: publicProcedure.input(z.object({
        content: z.string().array(),
        options: mathjaxParserOptionsSchema.pick({inline: true}),
    })).mutation(async (opts) => {
        let parser = opts.input.options.inline ? autoWrapMathInlineField : autoWrapMathDisplayField
        let data = await parser.array().parseAsync(opts.input.content)
        return data.map((a) => ({content: a}))
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
})


export default equationsRouter
