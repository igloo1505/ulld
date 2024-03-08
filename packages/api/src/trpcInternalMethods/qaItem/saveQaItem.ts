import { Prisma } from "@prisma/client"
import { getRandomId } from "@ulld/utilities"
import { prisma } from "@ulld/database"
import type { qaInputSchemaTrpc } from "../../schemas"
import { output } from 'zod'


export const saveQaItem = async (v: output<typeof qaInputSchemaTrpc>) => {
    let create: Prisma.QAPairCreateInput = {
        id: v.id || getRandomId(20),
        question: v.question,
        answer: v.answer,
        description: v.description === "" ? undefined : v.description,
        ...(v.tags.length > 0 && {
            tags: {
                connectOrCreate: v.tags.map((t) => ({
                    where: {
                        value: t
                    },
                    create: {
                        value: t
                    }
                }))
            }
        }),
        ...(v.topics.length > 0 && {
            topic: {
                connectOrCreate: v.topics.map((t) => ({
                    where: {
                        name: t
                    },
                    create: {
                        name: t
                    }
                }))
            }
        }),
        ...(v.subjects.length > 0 && {
            subject: {
                connectOrCreate: v.subjects.map((t) => ({
                    where: {
                        value: t
                    },
                    create: {
                        value: t
                    }
                }))
            }
        }),
    }
    let d: Prisma.QAPairUpsertArgs = {
        where: {
            id: v.id || ""
        },
        create: create,
        update: create
    }

    return await prisma.qAPair.upsert(d)
}
