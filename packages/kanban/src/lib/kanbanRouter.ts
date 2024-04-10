import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import { arrayTruthy } from "@ulld/utilities/booleanAndEqualities/arrayTruthy";
import { prisma } from "@ulld/database/db";
import {Tag} from "../../classes/prismaMdxRelations/tag"
import {Topic} from "../../classes/prismaMdxRelations/topic"
import {Subject} from "../../classes/prismaMdxRelations/subject"
import { createKanBanFormDataSchema } from "../../schemas/boards/main";
import { tagZodObject } from "@ulld/configschema/configUtilityTypes/docTypes";



export const kanBanBoardsRouter = router({
    getAllBoards: publicProcedure.query(async ({ input }) => {
        return await prisma.kanban.findMany({
            select: {
                title: true,
                lists: {
                    select: {
                        _count: true,
                    }
                },
                _count: true
            }
        })
    }),
    createNewBoard: publicProcedure.input(createKanBanFormDataSchema).mutation(async ({ input }) => {
        return await prisma.kanban.create({
            data: {
                title: input.title,
                ...(arrayTruthy(input.tags) && {
                    tags: {
                        connectOrCreate: input.tags.map((t) => {
                            let _tag = new Tag(tagZodObject.parse(t))
                            return _tag.connectOrCreateArgs()
                        })
                    }
                }),
                ...(arrayTruthy(input.subjects) && {
                    subjects: {
                        connectOrCreate: input.subjects.map((t) => {
                            let _subject = new Subject({value: t})
                            return _subject.connectOrCreateArgs()
                        })
                    }
                }),
                ...(arrayTruthy(input.topics) && {
                    topics: {
                        connectOrCreate: input.topics.map((t) => {
                            let _topic = new Topic({value: t})
                            return _topic.connectOrCreateArgs()
                        })
                    }
                }),
            }
        })
    }),
    getBoardById: publicProcedure.input(z.number().int()).query(async ({ input }) => {
        return await prisma.kanban.findFirst({
            where: {
                id: input
            },
            include: {
                lists: {
                    orderBy: {
                        indexWithinBoard: "asc"
                    },
                    include: {
                        cards: {
                            orderBy: {
                                indexWithinList: "asc"
                            }
                        },
                    }
                }
            }
        })
    }),
    appendNewListToBoard: publicProcedure.input(z.object({
        boardId: z.number().int(),
        list: z.object({
            title: z.string().min(4)
        })
    })).mutation(async ({ input }) => {
        let currentBoard = await prisma.kanban.findFirst({
            where: {
                id: input.boardId
            },
            select: {
                lists: {
                    select: {
                        indexWithinBoard: true
                    }
                }
            }
        })
        if (!currentBoard) return
        let nextIndex = Math.max(...currentBoard.lists.map((l) => l.indexWithinBoard), 0) + 1
        if (typeof nextIndex !== "number" || Number.isNaN(nextIndex)) {
            nextIndex = 0
        }
        return await prisma.kanban.update({
            where: {
                id: input.boardId
            },
            data: {
                lists: {
                    create: {
                        title: input.list.title,
                        indexWithinBoard: nextIndex
                    }
                }
            },
            include: {
                lists: {
                    include: {
                        cards: true
                    }
                }
            }
        })
    })
})
