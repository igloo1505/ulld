import { Subject, Tag, Topic, Prisma, prisma } from "@ulld/database";
import { publicProcedure, router } from "../../trpc";
import { z } from "zod";
import { TaskListIds } from "@ulld/utilities/types/todos";
import { ArrayUtilities } from "@ulld/utilities/utils/arrayUtilities";
import {
    addTodoListSchema,
    todoListAddTaskSchemaTrpc,
    updateTaskSchema,
} from "../../../plugins/native/todo/zod/general";
import {
    getToDoSearchParams,
    getParsedToDoSearchParams,
    todoStatusChangeSchema,
    todoStatusDueAtSchema,
    todoListNameSchema,
    zodArrayUnion,
    todoPriorityChangeSchema,
    parseTodoLists,
    taskIdItemSchema,
} from "@ulld/parsers/plugins/todos";
import { taggableFieldsAsStrings } from "@ulld/parsers/taggables";

const getToDoLists = async <T extends number | undefined>(
    id?: T,
): Promise<T extends number ? TaskListIds : TaskListIds[]> => {
    return (await prisma.toDoList[id ? "findFirst" : "findMany"]({
        ...(id && {
            where: {
                id: id,
            },
        }),
        select: { label: true, id: true },
        orderBy: {
            lastUpdate: "desc",
        },
    })) as T extends number ? TaskListIds : TaskListIds[];
};

export const todoPageTaskSelect: Prisma.ToDoListSelect = {
    label: true,
    id: true,
    tasks: {
        include: {
            tags: true,
            topics: true,
            subjects: true,
            ToDoList: {
                select: {
                    label: true,
                },
            },
        },
    },
    _count: true,
    createdAt: true,
    lastUpdate: true,
};

const getToDoPageData = async (
    input: z.infer<typeof getToDoSearchParams>,
    listIds: number[],
) => {
    return await prisma.toDoList.findMany({
        where: getParsedToDoSearchParams(input, listIds),
        select: todoPageTaskSelect,
    });
};

export const toDoRouter = router({
    getToDoLists: publicProcedure
        .input(z.number().optional())
        .query(async ({ input }) => {
            return await getToDoLists<typeof input>(input);
        }),
    getToDoListById: publicProcedure
        .input(z.number())
        .query(async ({ input }) => {
            return await prisma.toDoList.findFirst({
                where: {
                    id: input,
                },
                include: {
                    tags: true,
                    subjects: true,
                    topics: true,
                },
            });
        }),
    getToDos: publicProcedure
        .input(
            getToDoSearchParams.omit({
                listNames: true,
            }),
        )
        .query(async ({ input }) => {
            let lists: TaskListIds[] =
                (await getToDoLists<undefined>()) as TaskListIds[];
            const listIds =
                input.listIds && input.listIds.length
                    ? input.listIds
                    : lists && lists.length
                        ? [lists[0].id]
                        : [];
            let res = await getToDoPageData(input, listIds);
            const parsedTodos = await parseTodoLists(res);
            return {
                todos: parsedTodos,
                lists: taskIdItemSchema.array().parse(
                    lists.map((a) => ({
                        ...a,
                        active: listIds.includes(a.id),
                    })),
                ),
            };
        }),
    setToDoStatus: publicProcedure
        .input(todoStatusChangeSchema)
        .mutation(async ({ input }) => {
            return await prisma.toDo.updateMany({
                where: {
                    id: {
                        in: input.taskIds,
                    },
                },
                data: {
                    status: input.status,
                    completedOn: input.status === "Done" ? new Date() : null,
                },
            });
        }),
    findListsByTaggables: publicProcedure
        .input(taggableFieldsAsStrings)
        .query(async ({ input }) => {
            let filters: Prisma.ToDoListWhereInput[] = [];
            if (input.tags.length) {
                filters.push({
                    tags: {
                        some: {
                            value: {
                                in: input.tags,
                            },
                        },
                    },
                });
            }
            if (input.subjects.length) {
                filters.push({
                    subjects: {
                        some: {
                            value: {
                                in: input.subjects,
                            },
                        },
                    },
                });
            }
            if (input.topics.length) {
                filters.push({
                    topics: {
                        some: {
                            value: {
                                in: input.topics,
                            },
                        },
                    },
                });
            }
            return await prisma.toDoList.findMany({
                where: {
                    AND: filters,
                },
                select: {
                    tasks: {
                        where: {
                            status: {
                                in: ["ToDo", "In_Progress"],
                            },
                        },
                        select: {
                            dueAt: true,
                            details: true,
                            createdAt: true,
                            category: true,
                        },
                        take: 10,
                    },
                    id: true,
                    label: true,
                    createdAt: true,
                    _count: {
                        select: {
                            tasks: true,
                        },
                    },
                },
            });
        }),
    getOverdueTasksByListId: publicProcedure
        .input(z.number())
        .query(async ({ input }) => {
            return await prisma.toDoList.findFirst({
                where: {
                    id: input,
                },
                select: {
                    tasks: {
                        where: {
                            AND: [
                                {
                                    status: {
                                        notIn: ["Done"],
                                    },
                                },
                                {
                                    dueAt: {
                                        lt: new Date(),
                                    },
                                },
                            ],
                        },
                    },
                    _count: {
                        select: {
                            tasks: true,
                        },
                    },
                },
            });
        }),
    getOverdueTaskCount: publicProcedure.query(async () => {
        return await prisma.toDo.count({
            where: {
                AND: [
                    {
                        status: {
                            notIn: ["Done"],
                        },
                    },
                    {
                        dueAt: {
                            lt: new Date(),
                        },
                    },
                ],
            },
        });
    }),
    getOverdueTasks: publicProcedure.query(async () => {
        return await prisma.toDo.findMany({
            where: {
                AND: [
                    {
                        status: {
                            notIn: ["Done"],
                        },
                    },
                    {
                        dueAt: {
                            lt: new Date(),
                        },
                    },
                ],
            },
        });
    }),
    setToDoDueDate: publicProcedure
        .input(todoStatusDueAtSchema)
        .mutation(async ({ input }) => {
            return await prisma.toDo.updateMany({
                where: {
                    id: {
                        in: input.taskIds,
                    },
                },
                data: {
                    dueAt: input.dueAt,
                },
            });
        }),
    setToDoList: publicProcedure
        .input(todoListNameSchema)
        .mutation(async ({ input }) => {
            return await prisma.toDo.updateMany({
                where: {
                    id: input.taskId,
                },
                data: {
                    toDoListId: input.listId,
                },
            });
        }),
    deleteTaskByIds: publicProcedure
        .input(zodArrayUnion<number>(z.number()))
        .mutation(async ({ input }) => {
            return await prisma.toDo.deleteMany({
                where: {
                    id: {
                        in: input,
                    },
                },
            });
        }),
    toggleToDoBookmark: publicProcedure
        .input(
            z.object({
                taskId: z.coerce.number(),
                shouldBookmark: z.boolean().optional(),
            }),
        )
        .mutation(async ({ input }) => {
            let shouldBm = input.shouldBookmark;
            if (typeof input.shouldBookmark !== "boolean") {
                let res = await prisma.toDo.findFirst({
                    where: {
                        id: input.taskId,
                    },
                    select: {
                        bookmarked: true,
                    },
                });
                if (res) {
                    shouldBm = res.bookmarked;
                }
            }
            return await prisma.toDo.updateMany({
                where: {
                    id: input.taskId,
                },
                data: {
                    bookmarked: typeof shouldBm === "boolean" ? shouldBm : false,
                },
            });
        }),
    setToDoPriority: publicProcedure
        .input(todoPriorityChangeSchema)
        .mutation(async ({ input }) => {
            return await prisma.toDo.updateMany({
                where: {
                    id: {
                        in: input.taskIds,
                    },
                },
                data: {
                    priority: input.priority,
                },
            });
        }),
    getToDoDetails: publicProcedure
        .input(
            z.object({
                toDoId: z.number(),
            }),
        )
        .query(async ({ input }) => {
            return await prisma.toDo.findFirst({
                where: {
                    id: input.toDoId,
                },
                include: {
                    tags: true,
                    topics: true,
                },
            });
        }),
    createNewTodoList: publicProcedure
        .input(addTodoListSchema)
        .mutation(async ({ input }) => {
            return await prisma.toDoList.create({
                data: {
                    label: input.label,
                    topics: {
                        connectOrCreate:
                            ArrayUtilities.stringArrayToTagSubjectOrTopicConnectOrCreate<Topic>(
                                input.topics,
                            ),
                    },
                    tags: {
                        connectOrCreate:
                            ArrayUtilities.stringArrayToTagSubjectOrTopicConnectOrCreate<Tag>(
                                input.tags,
                            ) as Prisma.TagCreateOrConnectWithoutToDoInput[],
                    },
                    subjects: {
                        connectOrCreate:
                            ArrayUtilities.stringArrayToTagSubjectOrTopicConnectOrCreate<Subject>(
                                input.subjects,
                            ),
                    },
                },
            });
        }),
    createNewToDo: publicProcedure
        .input(todoListAddTaskSchemaTrpc)
        .mutation(async ({ input }) => {
            const data = todoListAddTaskSchemaTrpc.parse(input);
            const { listId, ...parsedData } = data;
            return await prisma.toDoList.update({
                where: {
                    id: listId,
                },
                data: {
                    tasks: {
                        create: {
                            ...parsedData,
                            dueAt: data.dueAt ? new Date(data.dueAt) : undefined,
                        },
                    },
                    lastUpdate: new Date(),
                },
            });
        }),
    deleteToDos: publicProcedure
        .input(z.number().array())
        .mutation(async ({ input }) => {
            return await prisma.toDo.deleteMany({
                where: {
                    id: {
                        in: input,
                    },
                },
            });
        }),
    editTaskNote: publicProcedure
        .input(
            z.object({
                taskId: z.number().int(),
                note: z.string().nullable(),
            }),
        )
        .mutation(async ({ input }) => {
            return await prisma.toDo.update({
                where: {
                    id: input.taskId,
                },
                data: {
                    details: input.note,
                },
            });
        }),
    getMostRecentToDoListId: publicProcedure.query(async () => {
        return await prisma.toDoList.findMany({
            select: {
                id: true,
            },
            orderBy: {
                lastUpdate: "desc",
            },
            take: 1,
        });
    }),
    markCompleted: publicProcedure
        .input(z.object({ taskIds: z.number().array() }))
        .mutation(async ({ input }) => {
            let res = await prisma.toDo.updateMany({
                where: {
                    id: {
                        in: input.taskIds,
                    },
                },
                data: {
                    status: "Done",
                    completedOn: new Date(),
                },
            });
            await prisma.toDoList.updateMany({
                where: {
                    tasks: {
                        some: {
                            id: {
                                in: input.taskIds,
                            },
                        },
                    },
                },
                data: {
                    lastUpdate: new Date(),
                },
            });
        }),
    updateTask: publicProcedure
        .input(updateTaskSchema)
        .mutation(async ({ input }) => {
            const data = updateTaskSchema.parse(input);
            let res = await prisma.toDo.update({
                where: {
                    id: data.id,
                },
                data: {
                    ...data,
                },
                select: {
                    ToDoList: {
                        select: {
                            id: true,
                        },
                    },
                },
            });
            if (res.ToDoList?.id) {
                await prisma.toDoList.update({
                    where: {
                        id: res.ToDoList.id,
                    },
                    data: {
                        lastAccess: new Date(),
                    },
                });
            }
            return res;
        }),
    archiveTasks: publicProcedure
        .input(z.number().int().array())
        .mutation(async ({ input }) => {
            return await prisma.toDo.updateMany({
                where: {
                    id: {
                        in: input,
                    },
                },
                data: {
                    status: "Done",
                },
            });
        }),
    getTaskLists: publicProcedure.query(async () => {
        return await prisma.toDoList.findMany({
            select: {
                id: true,
                label: true,
                lastUpdate: true,
            },
            orderBy: {
                lastUpdate: "desc",
            },
        });
    }),
    getTasksByCompletionDate: publicProcedure
        .input(
            z
                .object({
                    start: z.coerce.date().optional(),
                    stop: z.coerce.date().default(new Date()),
                })
                .default({}),
        )
        .query(async ({ input }) => {
            let tasks = [];
            if (input.start) {
                tasks = await prisma.toDo.findMany({
                    where: {
                        completedOn: {
                            gte: input.start,
                        },
                        status: "Done",
                    },
                    select: {
                        id: true,
                        task: true,
                    },
                    orderBy: {
                        completedOn: "desc",
                    },
                });
            } else {
                tasks = await prisma.toDo.findMany({
                    where: {
                        status: "Done",
                    },
                    select: {
                        id: true,
                        task: true,
                    },
                    orderBy: {
                        completedOn: "desc",
                    },
                });
            }
        }),
    getTaskManagerOverview: publicProcedure.query(async () => {
        let taskLists = await prisma.toDoList.findMany({
            select: {
                id: true,
                label: true,
                createdAt: true,
                _count: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        });
        let tasks = await prisma.toDo.findMany({
            select: {
                id: true,
                completedOn: true,
                createdAt: true,
                status: true,
                dueAt: true,
                toDoListId: true,
            },
        });
        let overdueCount = await prisma.toDo.count({
            where: {
                AND: [
                    {
                        completedOn: {
                            lte: new Date(),
                        },
                    },
                    {
                        status: {
                            not: "Done",
                        },
                    },
                ],
            },
        });
        return {
            tasks,
            taskLists,
            overdueCount,
        };
    }),
});
