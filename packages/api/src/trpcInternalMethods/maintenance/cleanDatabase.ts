import { prisma } from "#/db"
import { Prisma } from "@ulld/database"
import { databaseCleanValidityCheck } from "./databaseCleanValidityCheck"

type TBase = {
    id?: string | number
    value?: string
    name?: string
}

export const cleanDatabase = async () => {
    const deleteAllOf: (Prisma.TypeMap["meta"]["modelProps"])[] = [
        "sequentialNoteList", "definition"
    ]
    const toDeleteById = {
        tags: [] as string[],
        topics: [] as string[],
        subjects: [] as string[]
    }
    const setField = <T extends TBase>(items: T[], k: keyof typeof toDeleteById) => {
        for (const item of items) {
            let isValid = databaseCleanValidityCheck[`${k}ShouldBeDeleted`](item as any)
            if (isValid === "delete") {
                let v = item.id || item.value || item.name
                if (v) {
                    toDeleteById[k].push(v as any)
                }
            }
        }
    }
    const tags = await prisma.tag.findMany({
        select: {
            value: true,
            equations: {
                select: {
                    id: true
                }
            },
            toDo: {
                select: {
                    id: true
                }
            },
            QAPair: {
                select: {
                    id: true
                }
            },
            todoList: {
                select: {
                    id: true
                }
            },
            practiceExam: {
                select: {
                    id: true
                }
            },
            bibEntries: {
                select: {
                    id: true
                }
            }
        }
    })
    let subjects = await prisma.subject.findMany({
        select: {
            value: true,
            toDo: {
                select: {
                    id: true
                }
            },
            QaPair: {
                select: {
                    id: true
                }
            },
            todoList: {
                select: {
                    id: true
                }
            },
            practiceExam: {
                select: {
                    id: true
                }
            },
        }
    })
    let topics = await prisma.topic.findMany({
        select: {
            value: true,
            toDo: {
                select: {
                    id: true
                }
            },
            QAPair: {
                select: {
                    id: true
                }
            },
            todoList: {
                select: {
                    id: true
                }
            },
            practiceExam: {
                select: {
                    id: true
                }
            },

        }
    })
    setField<(typeof tags)[number]>(tags, "tags")
    setField<(typeof topics)[number]>(topics, "topics")
    setField<(typeof subjects)[number]>(subjects, "subjects")
    console.log("toDeleteById: ", JSON.stringify(toDeleteById, null, 4))
    if (toDeleteById.subjects.length !== 0) {
        await prisma.subject.deleteMany({
            where: {
                value: {
                    in: toDeleteById.subjects as string[]
                }
            }
        })
    }
    if (toDeleteById.topics.length !== 0) {
        await prisma.topic.deleteMany({
            where: {
                value: {
                    in: toDeleteById.topics as string[]
                }
            }
        })
    }
    if (toDeleteById.tags.length !== 0) {
        await prisma.tag.deleteMany({
            where: {
                value: {
                    in: toDeleteById.tags as string[]
                }
            }
        })
    }
    for await (const k of deleteAllOf) {
        let q = prisma[k]
        if (q.deleteMany) {
            /* @ts-ignore */
            await prisma[k].deleteMany({})
        }
    }
}

