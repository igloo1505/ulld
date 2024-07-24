export declare const trpcReactClient: any;
export declare const client: {
    autoSettings: {
        setAutoSettingsFromConfig: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _ctx_out: object;
                _input_in: typeof import("@trpc/server").unsetMarker;
                _input_out: typeof import("@trpc/server").unsetMarker;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
                _meta: object;
            }, void>>;
        };
        getAutoSettings: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: {
                    type?: "tag" | "topic" | "subject" | undefined;
                    withRegex?: boolean | undefined;
                };
                _input_out: {
                    withRegex: boolean;
                    type?: "tag" | "topic" | "subject" | undefined;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, import("./types").AutoSettingWithRegex[] | {
                id?: number;
                glob: string;
                value: string;
                type: import(".prisma/client").autoSetting;
            }[] | undefined>>;
        };
        deleteAutoSettingById: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: number;
                _input_out: number;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                id: number;
                type: import(".prisma/client").$Enums.autoSetting;
                glob: string;
                value: string;
            }>>;
        };
        addAutoSetting: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: {
                    type: "tag" | "topic" | "subject";
                    value: string;
                    glob: string;
                    id?: number | undefined;
                };
                _input_out: {
                    type: "tag" | "topic" | "subject";
                    value: string;
                    glob: string;
                    id?: number | undefined;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                id: number;
                type: import(".prisma/client").$Enums.autoSetting;
                glob: string;
                value: string;
            }>>;
        };
    };
    sync: {
        syncDir: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: {
                    offline?: boolean | undefined;
                    removeIfNotInFs?: boolean | null | undefined;
                    cleanBeforeSync?: boolean | undefined;
                } | undefined;
                _input_out: {
                    offline?: boolean | undefined;
                    removeIfNotInFs?: boolean | null | undefined;
                    cleanBeforeSync?: boolean | undefined;
                } | undefined;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, void>>;
        };
        backupNonFileSystemDB: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _ctx_out: object;
                _input_in: typeof import("@trpc/server").unsetMarker;
                _input_out: typeof import("@trpc/server").unsetMarker;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
                _meta: object;
            }, void>>;
        };
    };
    toDo: {
        getToDoLists: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: number | undefined;
                _input_out: number | undefined;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                id: number;
                label: string;
                active: boolean;
            } | {
                id: number;
                label: string;
                active: boolean;
            }[]>>;
        };
        getToDoListById: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: number;
                _input_out: number;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, ({
                tags: {
                    value: string;
                    kanbanId: number | null;
                }[];
                topics: {
                    value: string;
                    kanbanId: number | null;
                }[];
                subjects: {
                    value: string;
                    kanbanId: number | null;
                }[];
            } & {
                id: number;
                label: string;
                createdAt: Date;
                lastUpdate: Date;
            }) | null>>;
        };
        getToDos: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: {
                    listIds?: string | number | string[] | number[] | undefined;
                    showCompleted?: string | boolean | undefined;
                };
                _input_out: {
                    showCompleted: boolean;
                    listIds?: number[] | undefined;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                todos: {
                    tags: {
                        value: string;
                        kanbanId: number | null;
                    }[];
                    id: number;
                    label: string;
                    topic: {
                        value: string;
                    }[];
                    subject: {
                        value: string;
                    }[];
                    tasks: {
                        status: "ToDo" | "In_Progress" | "Backlog" | "Cancelled" | "Done" | "Future";
                        id: number;
                        bookmarked: boolean;
                        task: string;
                        priority: number;
                        createdAt?: any;
                        dueAt?: any;
                        details?: string | null | undefined;
                        parentId?: number | null | undefined;
                        category?: "bug" | "research" | "work" | "priority" | "feature" | "documentation" | "online" | "urgent" | "gym" | "freetime" | "study" | "paper" | null | undefined;
                        toDoListId?: number | null | undefined;
                    }[];
                    _count: {
                        tags: number;
                        topic: number;
                        subject: number;
                        tasks: number;
                    };
                    createdAt?: any;
                    lastUpdate?: any;
                }[];
                lists: {
                    id: number;
                    label: string;
                    active: boolean;
                }[];
            }>>;
        };
        setToDoStatus: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: {
                    status: "ToDo" | "In_Progress" | "Backlog" | "Cancelled" | "Done" | "Future";
                    taskIds: number[];
                };
                _input_out: {
                    status: "ToDo" | "In_Progress" | "Backlog" | "Cancelled" | "Done" | "Future";
                    taskIds: number[];
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, import(".prisma/client").Prisma.BatchPayload>>;
        };
        findListsByTaggables: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: {
                    topics?: string[] | undefined;
                    subjects?: string[] | undefined;
                    tags?: string[] | undefined;
                };
                _input_out: {
                    tags: string[];
                    topics: string[];
                    subjects: string[];
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                id: number;
                label: string;
                createdAt: Date;
                tasks: {
                    category: import(".prisma/client").$Enums.TaskCategory | null;
                    createdAt: Date;
                    dueAt: Date | null;
                    details: string | null;
                }[];
                _count: {
                    tasks: number;
                };
            }[]>>;
        };
        getOverdueTasksByListId: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: number;
                _input_out: number;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                tasks: {
                    id: number;
                    createdAt: Date;
                    task: string;
                    dueAt: Date | null;
                    details: string | null;
                    parentId: number | null;
                    category: import(".prisma/client").$Enums.TaskCategory | null;
                    bookmarked: boolean;
                    status: import(".prisma/client").$Enums.ToDoListStatus;
                    priority: number;
                    toDoListId: number | null;
                }[];
                _count: {
                    tasks: number;
                };
            } | null>>;
        };
        setToDoDueDate: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: {
                    dueAt: ((string | Date) & (string | Date | undefined)) | null;
                    taskIds: number[];
                };
                _input_out: {
                    dueAt: Date | null;
                    taskIds: number[];
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, import(".prisma/client").Prisma.BatchPayload>>;
        };
        setToDoList: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: {
                    taskId: number;
                    listId: number;
                };
                _input_out: {
                    taskId: number;
                    listId: number;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, import(".prisma/client").Prisma.BatchPayload>>;
        };
        deleteTaskByIds: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: string | number | string[] | number[] | undefined;
                _input_out: number[];
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, import(".prisma/client").Prisma.BatchPayload>>;
        };
        toggleToDoBookmark: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: {
                    taskId: number;
                    shouldBookmark?: boolean | undefined;
                };
                _input_out: {
                    taskId: number;
                    shouldBookmark?: boolean | undefined;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, import(".prisma/client").Prisma.BatchPayload>>;
        };
        setToDoPriority: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: {
                    priority: number;
                    taskIds: number[];
                };
                _input_out: {
                    priority: number;
                    taskIds: number[];
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, import(".prisma/client").Prisma.BatchPayload>>;
        };
        getToDoDetails: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: {
                    toDoId: number;
                };
                _input_out: {
                    toDoId: number;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, ({
                tags: {
                    value: string;
                    kanbanId: number | null;
                }[];
                topics: {
                    value: string;
                    kanbanId: number | null;
                }[];
            } & {
                id: number;
                createdAt: Date;
                task: string;
                dueAt: Date | null;
                details: string | null;
                parentId: number | null;
                category: import(".prisma/client").$Enums.TaskCategory | null;
                bookmarked: boolean;
                status: import(".prisma/client").$Enums.ToDoListStatus;
                priority: number;
                toDoListId: number | null;
            }) | null>>;
        };
        createNewTodoList: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: {
                    tags: string[];
                    label: string;
                    topics: string[];
                    subjects: string[];
                };
                _input_out: {
                    tags: string[];
                    label: string;
                    topics: string[];
                    subjects: string[];
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                id: number;
                label: string;
                createdAt: Date;
                lastUpdate: Date;
            }>>;
        };
        createNewToDo: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: {
                    task: string;
                    listId: number;
                    priority?: number | undefined;
                    status?: "ToDo" | "In_Progress" | "Backlog" | "Cancelled" | "Done" | "Future" | undefined;
                    dueAt?: string | Date | null | undefined;
                    details?: string | undefined;
                };
                _input_out: {
                    status: "ToDo" | "In_Progress" | "Backlog" | "Cancelled" | "Done" | "Future";
                    task: string;
                    priority: number;
                    listId: number;
                    dueAt?: Date | null | undefined;
                    details?: string | undefined;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                id: number;
                label: string;
                createdAt: Date;
                lastUpdate: Date;
            }>>;
        };
        deleteToDos: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: number[];
                _input_out: number[];
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, import(".prisma/client").Prisma.BatchPayload>>;
        };
        editTaskNote: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: {
                    note: string | null;
                    taskId: number;
                };
                _input_out: {
                    note: string | null;
                    taskId: number;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                id: number;
                createdAt: Date;
                task: string;
                dueAt: Date | null;
                details: string | null;
                parentId: number | null;
                category: import(".prisma/client").$Enums.TaskCategory | null;
                bookmarked: boolean;
                status: import(".prisma/client").$Enums.ToDoListStatus;
                priority: number;
                toDoListId: number | null;
            }>>;
        };
        getMostRecentToDoListId: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _ctx_out: object;
                _input_in: typeof import("@trpc/server").unsetMarker;
                _input_out: typeof import("@trpc/server").unsetMarker;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
                _meta: object;
            }, {
                id: number;
            }[]>>;
        };
        archiveTasks: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: number[];
                _input_out: number[];
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, import(".prisma/client").Prisma.BatchPayload>>;
        };
    };
    equations: {
        getEquationById: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: {
                    id?: number | undefined;
                    equationId?: string | undefined;
                };
                _input_out: {
                    id?: number | undefined;
                    equationId?: string | undefined;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                tags: {
                    value: string;
                }[];
                id: number;
                keywords: string[];
                title: string;
                desc: string | null;
                relatedValues: {
                    input: import(".prisma/client").Prisma.JsonValue;
                    output: number;
                }[];
                content: string;
                equationId: string | null;
                asPython: string | null;
                variables: string[];
            } | null>>;
        };
        getParsedEquationById: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: {
                    id: number;
                    title: {
                        options: {
                            em?: number | undefined;
                            ex?: number | undefined;
                            width?: number | undefined;
                            inline?: boolean | undefined;
                            styles?: boolean | undefined;
                            container?: boolean | undefined;
                            fontCache?: boolean | undefined;
                            assistiveMml?: boolean | undefined;
                            autoWrap?: boolean | undefined;
                            matchFontHeight?: boolean | undefined;
                        };
                        appendStylesToId?: string | undefined;
                        appendStylesToClass?: string | undefined;
                    };
                    desc: {
                        options: {
                            em?: number | undefined;
                            ex?: number | undefined;
                            width?: number | undefined;
                            inline?: boolean | undefined;
                            styles?: boolean | undefined;
                            container?: boolean | undefined;
                            fontCache?: boolean | undefined;
                            assistiveMml?: boolean | undefined;
                            autoWrap?: boolean | undefined;
                            matchFontHeight?: boolean | undefined;
                        };
                        appendStylesToId?: string | undefined;
                        appendStylesToClass?: string | undefined;
                    };
                    content: {
                        options: {
                            em?: number | undefined;
                            ex?: number | undefined;
                            width?: number | undefined;
                            inline?: boolean | undefined;
                            styles?: boolean | undefined;
                            container?: boolean | undefined;
                            fontCache?: boolean | undefined;
                            assistiveMml?: boolean | undefined;
                            autoWrap?: boolean | undefined;
                            matchFontHeight?: boolean | undefined;
                        };
                        appendStylesToId?: string | undefined;
                        appendStylesToClass?: string | undefined;
                    };
                    equationId?: string | undefined;
                };
                _input_out: {
                    id: number;
                    title: {
                        options: {
                            em?: number | undefined;
                            ex?: number | undefined;
                            width?: number | undefined;
                            inline?: boolean | undefined;
                            styles?: boolean | undefined;
                            container?: boolean | undefined;
                            fontCache?: boolean | undefined;
                            assistiveMml?: boolean | undefined;
                            autoWrap?: boolean | undefined;
                            matchFontHeight?: boolean | undefined;
                        };
                        appendStylesToId?: string | undefined;
                        appendStylesToClass?: string | undefined;
                    };
                    desc: {
                        options: {
                            em?: number | undefined;
                            ex?: number | undefined;
                            width?: number | undefined;
                            inline?: boolean | undefined;
                            styles?: boolean | undefined;
                            container?: boolean | undefined;
                            fontCache?: boolean | undefined;
                            assistiveMml?: boolean | undefined;
                            autoWrap?: boolean | undefined;
                            matchFontHeight?: boolean | undefined;
                        };
                        appendStylesToId?: string | undefined;
                        appendStylesToClass?: string | undefined;
                    };
                    content: {
                        options: {
                            em?: number | undefined;
                            ex?: number | undefined;
                            width?: number | undefined;
                            inline?: boolean | undefined;
                            styles?: boolean | undefined;
                            container?: boolean | undefined;
                            fontCache?: boolean | undefined;
                            assistiveMml?: boolean | undefined;
                            autoWrap?: boolean | undefined;
                            matchFontHeight?: boolean | undefined;
                        };
                        appendStylesToId?: string | undefined;
                        appendStylesToClass?: string | undefined;
                    };
                    equationId?: string | undefined;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                tags: {
                    value: string;
                    kanbanId: number | null;
                }[];
                id: number;
                topics: {
                    value: string;
                }[];
                subjects: {
                    value: string;
                }[];
                variables: string[];
                equationId?: string | null | undefined;
                title?: string | null | undefined;
                desc?: string | null | undefined;
                content?: string | null | undefined;
                asPython?: string | null | undefined;
                createdAt?: string | Date | null | undefined;
            }>>;
        };
        getEquationEmbedProps: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: {
                    equationId: string;
                };
                _input_out: {
                    equationId: string;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                rawLatex: string;
                tags: {
                    value: string;
                    kanbanId: number | null;
                }[];
                id: number;
                topics: {
                    value: string;
                }[];
                subjects: {
                    value: string;
                }[];
                variables: string[];
                equationId?: string | null | undefined;
                title?: string | null | undefined;
                desc?: string | null | undefined;
                content?: string | null | undefined;
                asPython?: string | null | undefined;
                createdAt?: string | Date | null | undefined;
            }>>;
        };
        deleteEquationById: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: number;
                _input_out: number;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                id: number;
                equationId: string | null;
                title: string;
                desc: string | null;
                content: string;
                asPython: string | null;
                variableLegend: import(".prisma/client").Prisma.JsonValue | null;
                variables: string[];
                keywords: string[];
                createdAt: Date;
            }>>;
        };
        getEquationsList: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: {
                    orderBy: "title" | "createdAt";
                    value?: string | undefined;
                    tags?: string | string[] | undefined;
                    page?: number | undefined;
                    query?: string | undefined;
                    take?: number | undefined;
                    variables?: string | string[] | undefined;
                    sortDir?: "desc" | "asc" | undefined;
                };
                _input_out: {
                    tags: any[];
                    page: number;
                    orderBy: "title" | "createdAt";
                    take: number;
                    variables: any[];
                    sortDir: "desc" | "asc";
                    value?: string | undefined;
                    query?: string | undefined;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                equations: {
                    id: number;
                    equationId: string | null;
                    title: string;
                    desc: string | null;
                    content: string;
                    asPython: string | null;
                    variableLegend: import(".prisma/client").Prisma.JsonValue | null;
                    variables: string[];
                    keywords: string[];
                    createdAt: Date;
                }[];
                tags: string[];
                variables: string[];
            }>>;
        };
        addEquation: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: {
                    keywords: string[];
                    title: string;
                    content: string;
                    variables: string[];
                    tagInput: string;
                    variableInput: string;
                    keywordInput: string;
                    id?: number | undefined;
                    desc?: string | undefined;
                    equationId?: string | undefined;
                    asPython?: string | undefined;
                    tags?: string[] | undefined;
                    relatedValues?: {
                        input: Record<string, number>;
                        output: number;
                    }[] | undefined;
                };
                _input_out: {
                    tags: string[];
                    keywords: string[];
                    title: string;
                    content: string;
                    variables: string[];
                    tagInput: string;
                    variableInput: string;
                    keywordInput: string;
                    id?: number | undefined;
                    desc?: string | undefined;
                    equationId?: string | undefined;
                    asPython?: string | undefined;
                    relatedValues?: {
                        input: Record<string, number>;
                        output: number;
                    }[] | undefined;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                id: number;
                equationId: string | null;
                title: string;
                desc: string | null;
                content: string;
                asPython: string | null;
                variableLegend: import(".prisma/client").Prisma.JsonValue | null;
                variables: string[];
                keywords: string[];
                createdAt: Date;
            }>>;
        };
        mathStringArrayToLatex: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: {
                    options: {
                        inline?: boolean | undefined;
                    };
                    content: string[];
                };
                _input_out: {
                    options: {
                        inline?: boolean | undefined;
                    };
                    content: string[];
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                content: string;
            }[]>>;
        };
        getIdFromEquationId: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: string;
                _input_out: string;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                id: number;
            } | null>>;
        };
    };
    commandPalette: {
        noteSearch: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _ctx_out: object;
                _input_in: typeof import("@trpc/server").unsetMarker;
                _input_out: typeof import("@trpc/server").unsetMarker;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
                _meta: object;
            }, {
                id: number;
                href: string;
                title: string;
                isProtected: boolean | null;
                latexTitle: string | null;
            }[]>>;
        };
        tagSearch: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _ctx_out: object;
                _input_in: typeof import("@trpc/server").unsetMarker;
                _input_out: typeof import("@trpc/server").unsetMarker;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
                _meta: object;
            }, {
                value: string;
                kanbanId: number | null;
            }[]>>;
        };
        subjectSearch: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _ctx_out: object;
                _input_in: typeof import("@trpc/server").unsetMarker;
                _input_out: typeof import("@trpc/server").unsetMarker;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
                _meta: object;
            }, {
                value: string;
                kanbanId: number | null;
            }[]>>;
        };
        equationSearch: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _ctx_out: object;
                _input_in: typeof import("@trpc/server").unsetMarker;
                _input_out: typeof import("@trpc/server").unsetMarker;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
                _meta: object;
            }, {
                id: number;
                title: string;
                content: string;
            }[]>>;
        };
        getDefinitions: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: {
                    rsc?: boolean | undefined;
                } | undefined;
                _input_out: {
                    rsc: boolean;
                } | undefined;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                id: string;
                label?: string | null | undefined;
                content?: string | null | undefined;
                alphabeticalLabel?: string | null | undefined;
                mdxNote?: import("../classes/prismaMdxRelations/MdxNote").MdxNote | undefined;
                mdxNoteId?: number | null | undefined;
            }[]>>;
        };
        getCommandPaletteData: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _ctx_out: object;
                _input_in: typeof import("@trpc/server").unsetMarker;
                _input_out: typeof import("@trpc/server").unsetMarker;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
                _meta: object;
            }, {
                notes: {
                    href: string;
                    title: string;
                    isProtected: boolean | null;
                    latexTitle: string | null;
                }[];
                tags: {
                    value: string;
                    kanbanId: number | null;
                }[];
            }>>;
        };
    };
    search: {
        getNoteHrefFromDefinitionId: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: string;
                _input_out: string;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, string | undefined>>;
        };
        getSequentialIdListByKey: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: string;
                _input_out: string;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                href: string;
                title: string;
                sequentialIndex: number | null;
            }[]>>;
        };
        getDefinitionList: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _ctx_out: object;
                _input_in: typeof import("@trpc/server").unsetMarker;
                _input_out: typeof import("@trpc/server").unsetMarker;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
                _meta: object;
            }, {
                id: string;
                mdxNoteId: number | null;
                label?: {
                    parsed: string;
                    original: string;
                } | undefined;
                content?: {
                    parsed: string;
                    original: string;
                } | undefined;
            }[]>>;
        };
        rootRelativePathIsBookmarked: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: string;
                _input_out: string;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, boolean>>;
        };
        getUniqueTags: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _ctx_out: object;
                _input_in: typeof import("@trpc/server").unsetMarker;
                _input_out: typeof import("@trpc/server").unsetMarker;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
                _meta: object;
            }, string[]>>;
        };
        getUniqueTagTopicAndSubjects: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: "tag" | "topic" | "subject" | null | undefined;
                _input_out: "tag" | "topic" | "subject" | null | undefined;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, string[] | {
                tags: string[];
                topics: string[];
                subjects: string[];
            }>>;
        };
        getBookmarked: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _ctx_out: object;
                _input_in: typeof import("@trpc/server").unsetMarker;
                _input_out: typeof import("@trpc/server").unsetMarker;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
                _meta: object;
            }, {
                mdxNotes: {
                    tags: {
                        value: string;
                        kanbanId: number | null;
                    }[];
                    id: number;
                    href: string;
                    title: string;
                    citations: {
                        id: string;
                        htmlCitation: string | null;
                    }[];
                    noteType: string;
                    latexTitle: string | null;
                    rootRelativePath: string;
                    summary: string | null;
                    sequentialIndex: number | null;
                    firstSync: Date;
                    lastSync: Date;
                    topics: {
                        value: string;
                        kanbanId: number | null;
                    }[];
                    definitions: {
                        id: string;
                        label: string | null;
                        content: string | null;
                        alphabeticalLabel: string | null;
                        mdxNoteId: number | null;
                    }[];
                    subjects: {
                        value: string;
                        kanbanId: number | null;
                    }[];
                }[];
            }>>;
        };
        findUnknownDBNoteTypeFromRootRelativePath: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: string;
                _input_out: string;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                markdown: {
                    id: number;
                    rootRelativePath: string;
                } | null;
                notebook: {
                    id: number;
                    rootRelativePath: string;
                } | null;
            }>>;
        };
    };
    boards: {
        getAllBoards: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _ctx_out: object;
                _input_in: typeof import("@trpc/server").unsetMarker;
                _input_out: typeof import("@trpc/server").unsetMarker;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
                _meta: object;
            }, {
                title: string;
                lists: {
                    _count: {
                        cards: number;
                        Kanban: number;
                    };
                }[];
                _count: {
                    lists: number;
                    tags: number;
                    subjects: number;
                    topics: number;
                };
            }[]>>;
        };
        createNewBoard: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: {
                    tags: string[];
                    title: string;
                    topics: string[];
                    subjects: string[];
                };
                _input_out: {
                    tags: string[];
                    title: string;
                    topics: string[];
                    subjects: string[];
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                id: number;
                title: string;
                createdAt: Date;
                lastUpdate: Date;
            }>>;
        };
        getBoardById: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: number;
                _input_out: number;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, ({
                lists: ({
                    cards: {
                        id: number;
                        listId: number | null;
                        indexWithinList: number;
                        label: string | null;
                        details: string | null;
                    }[];
                } & {
                    id: number;
                    indexWithinBoard: number;
                    title: string | null;
                    boardId: number | null;
                })[];
            } & {
                id: number;
                title: string;
                createdAt: Date;
                lastUpdate: Date;
            }) | null>>;
        };
        appendNewListToBoard: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: {
                    list: {
                        title: string;
                    };
                    boardId: number;
                };
                _input_out: {
                    list: {
                        title: string;
                    };
                    boardId: number;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, ({
                lists: ({
                    cards: {
                        id: number;
                        listId: number | null;
                        indexWithinList: number;
                        label: string | null;
                        details: string | null;
                    }[];
                } & {
                    id: number;
                    indexWithinBoard: number;
                    title: string | null;
                    boardId: number | null;
                })[];
            } & {
                id: number;
                title: string;
                createdAt: Date;
                lastUpdate: Date;
            }) | undefined>>;
        };
    };
    parse: {
        serializeMdxString: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: {
                    content: string;
                    display?: "display" | "inline" | undefined;
                };
                _input_out: {
                    display: "display" | "inline";
                    content: string;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, string>>;
        };
        latexStringToPdf: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: {
                    body?: string | undefined;
                    fromPath?: string | undefined;
                    outputPath?: string | undefined;
                    saveFilePath?: string | undefined;
                };
                _input_out: {
                    body?: string | undefined;
                    fromPath?: string | undefined;
                    outputPath?: string | undefined;
                    saveFilePath?: string | undefined;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, import("fs").WriteStream | undefined>>;
        };
    };
    settings: {
        getSettings: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _ctx_out: object;
                _input_in: typeof import("@trpc/server").unsetMarker;
                _input_out: typeof import("@trpc/server").unsetMarker;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
                _meta: object;
            }, {
                id: number;
                tooltips: boolean;
                title: string;
                summary_showCitations: boolean;
                summary_showTags: boolean;
                landingImageAlign: import(".prisma/client").$Enums.ImageAlignment;
                lockedLandingImage: string | null;
                cleanOnSync: boolean;
                firstSync: Date;
                lastSync: Date;
            } | null>>;
        };
        toggleBooleanSetting: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: "tooltips" | "cleanOnSync" | "summary_showTags" | "summary_showCitations";
                _input_out: "tooltips" | "cleanOnSync" | "summary_showTags" | "summary_showCitations";
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                id: number;
                tooltips: boolean;
                title: string;
                summary_showCitations: boolean;
                summary_showTags: boolean;
                landingImageAlign: import(".prisma/client").$Enums.ImageAlignment;
                lockedLandingImage: string | null;
                cleanOnSync: boolean;
                firstSync: Date;
                lastSync: Date;
            } | undefined>>;
        };
        lockCurrentLandingImage: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: string;
                _input_out: string;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                lockedLandingImage: string | null;
            } | undefined>>;
        };
        updateSettings: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: import(".prisma/client").Prisma.SettingsCreateInput;
                _input_out: import(".prisma/client").Prisma.SettingsCreateInput;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                id: number;
                tooltips: boolean;
                title: string;
                summary_showCitations: boolean;
                summary_showTags: boolean;
                landingImageAlign: import(".prisma/client").$Enums.ImageAlignment;
                lockedLandingImage: string | null;
                cleanOnSync: boolean;
                firstSync: Date;
                lastSync: Date;
            } | undefined>>;
        };
    };
    mdx: {
        deleteNoteById: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: number | number[];
                _input_out: any[];
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, import(".prisma/client").Prisma.BatchPayload>>;
        };
        toggleBookmarkedById: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: number;
                _input_out: number;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, boolean>>;
        };
        getRemoteMdx: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: string;
                _input_out: string;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, ({
                tags: {
                    value: string;
                    kanbanId: number | null;
                }[];
                equations: {
                    id: number;
                    equationId: string | null;
                    title: string;
                    desc: string | null;
                    content: string;
                    asPython: string | null;
                    variableLegend: import(".prisma/client").Prisma.JsonValue | null;
                    variables: string[];
                    keywords: string[];
                    createdAt: Date;
                }[];
                citations: {
                    id: string;
                    BibId: number | null;
                    OwnWork: boolean;
                    ColleaguesWork: boolean;
                    read: boolean;
                    htmlCitation: string | null;
                    PdfPath: string | null;
                    address: string | null;
                    annote: string | null;
                    author: string | null;
                    booktitle: string | null;
                    chapter: string | null;
                    crossref: string | null;
                    doi: string | null;
                    edition: string | null;
                    editor: string | null;
                    email: string | null;
                    howpublished: string | null;
                    institution: string | null;
                    journal: string | null;
                    month: string | null;
                    note: string | null;
                    number: string | null;
                    organization: string | null;
                    pages: string | null;
                    publisher: string | null;
                    school: string | null;
                    series: string | null;
                    title: string | null;
                    volume: string | null;
                    type: string | null;
                    year: string | null;
                    numpages: string | null;
                    url: string | null;
                    issue: string | null;
                    issn: string | null;
                    abstract: string | null;
                    urldate: string | null;
                    keywords: string | null;
                    copyright: string | null;
                    added: Date;
                }[];
                toDo: {
                    id: number;
                    createdAt: Date;
                    task: string;
                    dueAt: Date | null;
                    details: string | null;
                    parentId: number | null;
                    category: import(".prisma/client").$Enums.TaskCategory | null;
                    bookmarked: boolean;
                    status: import(".prisma/client").$Enums.ToDoListStatus;
                    priority: number;
                    toDoListId: number | null;
                }[];
                ReadingList: {
                    name: string;
                    description: string | null;
                    createdAt: Date;
                    lastUpdate: Date;
                }[];
                topics: {
                    value: string;
                    kanbanId: number | null;
                }[];
                sequentialList: {
                    sequentialKey: string;
                } | null;
                definitions: {
                    id: string;
                    label: string | null;
                    content: string | null;
                    alphabeticalLabel: string | null;
                    mdxNoteId: number | null;
                }[];
                subjects: {
                    value: string;
                    kanbanId: number | null;
                }[];
                _count: {
                    topics: number;
                    subjects: number;
                    tags: number;
                    citations: number;
                    sequentialList: number;
                    ReadingList: number;
                    equations: number;
                    definitions: number;
                    toDo: number;
                };
            } & {
                id: number;
                isProtected: boolean | null;
                dietSummaryKey: string | null;
                title: string;
                latexTitle: string | null;
                rootRelativePath: string;
                noteType: string;
                content: string;
                formatted: string | null;
                summary: string | null;
                citationsListOrder: string[];
                importantValues: number[];
                imageSrc: string | null;
                href: string;
                sequentialKey: string | null;
                sequentialIndex: number | null;
                floatImages: boolean;
                remoteUrl: string | null;
                trackRemote: boolean;
                outgoingQuickLinks: string[];
                quickLink: string | null;
                bookmarked: boolean;
                firstSync: Date;
                lastSync: Date;
            }) | null>>;
        };
        getRemoteMdxFromPathname: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: string;
                _input_out: string;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, ({
                tags: {
                    value: string;
                    kanbanId: number | null;
                }[];
                equations: {
                    id: number;
                    equationId: string | null;
                    title: string;
                    desc: string | null;
                    content: string;
                    asPython: string | null;
                    variableLegend: import(".prisma/client").Prisma.JsonValue | null;
                    variables: string[];
                    keywords: string[];
                    createdAt: Date;
                }[];
                citations: {
                    id: string;
                    BibId: number | null;
                    OwnWork: boolean;
                    ColleaguesWork: boolean;
                    read: boolean;
                    htmlCitation: string | null;
                    PdfPath: string | null;
                    address: string | null;
                    annote: string | null;
                    author: string | null;
                    booktitle: string | null;
                    chapter: string | null;
                    crossref: string | null;
                    doi: string | null;
                    edition: string | null;
                    editor: string | null;
                    email: string | null;
                    howpublished: string | null;
                    institution: string | null;
                    journal: string | null;
                    month: string | null;
                    note: string | null;
                    number: string | null;
                    organization: string | null;
                    pages: string | null;
                    publisher: string | null;
                    school: string | null;
                    series: string | null;
                    title: string | null;
                    volume: string | null;
                    type: string | null;
                    year: string | null;
                    numpages: string | null;
                    url: string | null;
                    issue: string | null;
                    issn: string | null;
                    abstract: string | null;
                    urldate: string | null;
                    keywords: string | null;
                    copyright: string | null;
                    added: Date;
                }[];
                toDo: {
                    id: number;
                    createdAt: Date;
                    task: string;
                    dueAt: Date | null;
                    details: string | null;
                    parentId: number | null;
                    category: import(".prisma/client").$Enums.TaskCategory | null;
                    bookmarked: boolean;
                    status: import(".prisma/client").$Enums.ToDoListStatus;
                    priority: number;
                    toDoListId: number | null;
                }[];
                ReadingList: {
                    name: string;
                    description: string | null;
                    createdAt: Date;
                    lastUpdate: Date;
                }[];
                topics: {
                    value: string;
                    kanbanId: number | null;
                }[];
                sequentialList: {
                    sequentialKey: string;
                } | null;
                definitions: {
                    id: string;
                    label: string | null;
                    content: string | null;
                    alphabeticalLabel: string | null;
                    mdxNoteId: number | null;
                }[];
                subjects: {
                    value: string;
                    kanbanId: number | null;
                }[];
                _count: {
                    topics: number;
                    subjects: number;
                    tags: number;
                    citations: number;
                    sequentialList: number;
                    ReadingList: number;
                    equations: number;
                    definitions: number;
                    toDo: number;
                };
            } & {
                id: number;
                isProtected: boolean | null;
                dietSummaryKey: string | null;
                title: string;
                latexTitle: string | null;
                rootRelativePath: string;
                noteType: string;
                content: string;
                formatted: string | null;
                summary: string | null;
                citationsListOrder: string[];
                importantValues: number[];
                imageSrc: string | null;
                href: string;
                sequentialKey: string | null;
                sequentialIndex: number | null;
                floatImages: boolean;
                remoteUrl: string | null;
                trackRemote: boolean;
                outgoingQuickLinks: string[];
                quickLink: string | null;
                bookmarked: boolean;
                firstSync: Date;
                lastSync: Date;
            }) | null>>;
        };
        getFsMdx: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: {
                    rootRelativePath: string;
                    extension: ".mdx" | ".md";
                    useProcessRoot?: boolean | undefined;
                };
                _input_out: {
                    rootRelativePath: string;
                    extension: ".mdx" | ".md";
                    useProcessRoot: boolean;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, string>>;
        };
        parseMdxString: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: {
                    content: string;
                    display?: "display" | "inline" | undefined;
                };
                _input_out: {
                    display: "display" | "inline";
                    content: string;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, string>>;
        };
    };
    snippets: {
        saveSnippet: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: {
                    content: string;
                    description: string;
                    language: "latex" | "css" | "node" | "python" | "react" | "swift" | "tailwind" | "javascript" | "lua" | "typescript" | "scss" | "prisma" | "bash" | "zsh" | "bibtex" | "json" | "applescript";
                    keywords?: string[] | {
                        set: string[];
                    } | undefined;
                    id?: number | undefined;
                };
                _input_out: {
                    content: string;
                    description: string;
                    language: "latex" | "css" | "node" | "python" | "react" | "swift" | "tailwind" | "javascript" | "lua" | "typescript" | "scss" | "prisma" | "bash" | "zsh" | "bibtex" | "json" | "applescript";
                    keywords?: string[] | {
                        set: string[];
                    } | undefined;
                    id?: number | undefined;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, boolean>>;
        };
        deleteSnippet: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: number;
                _input_out: number;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                id: number;
                content: string;
                description: string;
                keywords: string[];
                language: import(".prisma/client").$Enums.Technologies;
            }>>;
        };
        getSnippets: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: {
                    language?: "latex" | "css" | "node" | "python" | "react" | "swift" | "tailwind" | "javascript" | "lua" | "typescript" | "scss" | "prisma" | "bash" | "zsh" | "bibtex" | "json" | "applescript" | undefined;
                    query?: string | undefined;
                };
                _input_out: {
                    language?: "latex" | "css" | "node" | "python" | "react" | "swift" | "tailwind" | "javascript" | "lua" | "typescript" | "scss" | "prisma" | "bash" | "zsh" | "bibtex" | "json" | "applescript" | undefined;
                    query?: string | undefined;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                id: number;
                content: string;
                description: string;
                keywords: string[];
                language: import(".prisma/client").$Enums.Technologies;
            }[]>>;
        };
        getSpecificSnippet: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: number;
                _input_out: number;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                id: number;
                content: string;
                description: string;
                keywords: string[];
                language: import(".prisma/client").$Enums.Technologies;
            } | null>>;
        };
    };
    fsUtils: {
        getParsableFiletypesAtPath: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: string;
                _input_out: string;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                ".mdx": boolean;
                ".md": boolean;
                ".ipynb": boolean;
                ".csv": boolean;
                ".tsv": boolean;
                ".excel": boolean;
                ".numpy": boolean;
                ".html": boolean;
                ".pickle": boolean;
                ".db": boolean;
                ".sql": boolean;
                ".pdf": boolean;
                ".json": boolean;
                ".tex": boolean;
                ".hdf5": boolean;
            }>>;
        };
        getAllRootRelativePathsOfFiletype: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: ".mdx" | ".md" | ".ipynb";
                _input_out: ".mdx" | ".md" | ".ipynb";
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, string[]>>;
        };
        clearTempDir: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _ctx_out: object;
                _input_in: typeof import("@trpc/server").unsetMarker;
                _input_out: typeof import("@trpc/server").unsetMarker;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
                _meta: object;
            }, void>>;
        };
        getUtf8File: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: {
                    rootRelativePath: string;
                    useProcessRoot?: boolean | undefined;
                };
                _input_out: {
                    rootRelativePath: string;
                    useProcessRoot: boolean;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, string>>;
        };
    };
    readingList: {
        addToReadingList: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: {
                    type: "BibEntry" | "MdxNote";
                    itemId: string | number;
                    readingListName?: string | undefined;
                };
                _input_out: {
                    type: "BibEntry" | "MdxNote";
                    readingListName: string;
                    itemId: string | number;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                name: string;
                description: string | null;
                createdAt: Date;
                lastUpdate: Date;
            }>>;
        };
        getReadingListContent: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: string;
                _input_out: string;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, ({
                bibEntries: ({
                    tags: {
                        value: string;
                        kanbanId: number | null;
                    }[];
                    MdxNotes: {
                        id: number;
                        isProtected: boolean | null;
                        dietSummaryKey: string | null;
                        title: string;
                        latexTitle: string | null;
                        rootRelativePath: string;
                        noteType: string;
                        content: string;
                        formatted: string | null;
                        summary: string | null;
                        citationsListOrder: string[];
                        importantValues: number[];
                        imageSrc: string | null;
                        href: string;
                        sequentialKey: string | null;
                        sequentialIndex: number | null;
                        floatImages: boolean;
                        remoteUrl: string | null;
                        trackRemote: boolean;
                        outgoingQuickLinks: string[];
                        quickLink: string | null;
                        bookmarked: boolean;
                        firstSync: Date;
                        lastSync: Date;
                    }[];
                    citationGroups: {
                        name: string;
                        description: string | null;
                    }[];
                } & {
                    id: string;
                    BibId: number | null;
                    OwnWork: boolean;
                    ColleaguesWork: boolean;
                    read: boolean;
                    htmlCitation: string | null;
                    PdfPath: string | null;
                    address: string | null;
                    annote: string | null;
                    author: string | null;
                    booktitle: string | null;
                    chapter: string | null;
                    crossref: string | null;
                    doi: string | null;
                    edition: string | null;
                    editor: string | null;
                    email: string | null;
                    howpublished: string | null;
                    institution: string | null;
                    journal: string | null;
                    month: string | null;
                    note: string | null;
                    number: string | null;
                    organization: string | null;
                    pages: string | null;
                    publisher: string | null;
                    school: string | null;
                    series: string | null;
                    title: string | null;
                    volume: string | null;
                    type: string | null;
                    year: string | null;
                    numpages: string | null;
                    url: string | null;
                    issue: string | null;
                    issn: string | null;
                    abstract: string | null;
                    urldate: string | null;
                    keywords: string | null;
                    copyright: string | null;
                    added: Date;
                })[];
            } & {
                name: string;
                description: string | null;
                createdAt: Date;
                lastUpdate: Date;
            }) | null>>;
        };
    };
    universalNotes: {
        getSummaryOfAllNotes: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _ctx_out: object;
                _input_in: typeof import("@trpc/server").unsetMarker;
                _input_out: typeof import("@trpc/server").unsetMarker;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
                _meta: object;
            }, {
                tags: {
                    value: string;
                    kanbanId: number | null;
                }[];
                title: string;
                summary: string | null;
                subjects: {
                    value: string;
                    kanbanId: number | null;
                }[];
                _count: {
                    topics: number;
                    subjects: number;
                    tags: number;
                    citations: number;
                    sequentialList: number;
                    ReadingList: number;
                    equations: number;
                    definitions: number;
                    toDo: number;
                };
            }[]>>;
        };
        getNoteIdByHref: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: string;
                _input_out: string;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, number | null>>;
        };
        getFsNoteOfUnknownFormat: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: string;
                _input_out: string;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                content: string;
                format: string;
            } | undefined>>;
        };
        getQuickLinkHref: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: string;
                _input_out: string;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                href: string;
            } | null>>;
        };
    };
    media: {
        getImagesInDir: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: {
                    path: string;
                    recursive?: boolean | undefined;
                };
                _input_out: {
                    path: string;
                    recursive: boolean;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, string[]>>;
        };
        getRandomBackgroundSettings: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _ctx_out: object;
                _input_in: typeof import("@trpc/server").unsetMarker;
                _input_out: typeof import("@trpc/server").unsetMarker;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
                _meta: object;
            }, {
                path?: string | undefined;
                createdAt?: Date | undefined;
                landingImageAlign?: import(".prisma/client").$Enums.ImageAlignment | undefined;
                lockedLandingImage?: string | null | undefined;
            }>>;
        };
        deleteRandomImage: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: {
                    path: string;
                };
                _input_out: {
                    path: string;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                path: string;
                createdAt: Date;
            }>>;
        };
        updateRandomImageBackground: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: {
                    path: string;
                };
                _input_out: {
                    path: string;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                path: string;
                createdAt: Date;
            }>>;
        };
    };
    qa: {
        saveQA: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: {
                    question: string;
                    answer: string;
                    tags?: string[] | undefined;
                    id?: string | undefined;
                    topics?: string[] | undefined;
                    subjects?: string[] | undefined;
                    description?: string | undefined;
                };
                _input_out: {
                    tags: string[];
                    topics: string[];
                    subjects: string[];
                    question: string;
                    answer: string;
                    id?: string | undefined;
                    description?: string | undefined;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                id: string;
                question: string;
                answer: string;
                description: string | null;
                secondaryLabel: string | null;
                correctCount: number;
                inCorrectCount: number;
            }>>;
        };
        getSpecificQA: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: string;
                _input_out: string;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, ({
                tags: {
                    value: string;
                    kanbanId: number | null;
                }[];
                topics: {
                    value: string;
                    kanbanId: number | null;
                }[];
                subjects: {
                    value: string;
                    kanbanId: number | null;
                }[];
            } & {
                id: string;
                question: string;
                answer: string;
                description: string | null;
                secondaryLabel: string | null;
                correctCount: number;
                inCorrectCount: number;
            }) | null>>;
        };
        addQAResult: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: {
                    success: boolean;
                    id: string;
                };
                _input_out: {
                    success: boolean;
                    id: string;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                id: string;
                question: string;
                answer: string;
                description: string | null;
                secondaryLabel: string | null;
                correctCount: number;
                inCorrectCount: number;
            } | undefined>>;
        };
        getQaAutocompleteOptions: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _ctx_out: object;
                _input_in: typeof import("@trpc/server").unsetMarker;
                _input_out: typeof import("@trpc/server").unsetMarker;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
                _meta: object;
            }, string[]>>;
        };
        getQaExam: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: {
                    tags?: string[] | undefined;
                    topics?: string[] | undefined;
                    subjects?: string[] | undefined;
                };
                _input_out: {
                    tags?: string[] | undefined;
                    topics?: string[] | undefined;
                    subjects?: string[] | undefined;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, ({
                id: string;
                question: string;
                answer: string;
                description: string | null;
                secondaryLabel: string | null;
                correctCount: number;
                inCorrectCount: number;
            } & {
                randomId: number;
            })[]>>;
        };
    };
    whiteboard: {
        save: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: {
                    data: string;
                    id: string;
                };
                _input_out: {
                    data: string;
                    id: string;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                id: string;
                data: Buffer;
            }>>;
        };
        getById: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: {
                    id: string;
                };
                _input_out: {
                    id: string;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                id: string;
                data: Buffer;
            } | null>>;
        };
        deleteById: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: {
                    id: string;
                };
                _input_out: {
                    id: string;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                id: string;
                data: Buffer;
            }>>;
        };
    };
    bibliography: {
        getPrismaBib: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _ctx_out: object;
                _input_in: typeof import("@trpc/server").unsetMarker;
                _input_out: typeof import("@trpc/server").unsetMarker;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
                _meta: object;
            }, ({
                entries: ({
                    tags: {
                        value: string;
                        kanbanId: number | null;
                    }[];
                    MdxNotes: {
                        href: string;
                        title: string;
                    }[];
                    citationGroups: {
                        name: string;
                        description: string | null;
                    }[];
                } & {
                    id: string;
                    BibId: number | null;
                    OwnWork: boolean;
                    ColleaguesWork: boolean;
                    read: boolean;
                    htmlCitation: string | null;
                    PdfPath: string | null;
                    address: string | null;
                    annote: string | null;
                    author: string | null;
                    booktitle: string | null;
                    chapter: string | null;
                    crossref: string | null;
                    doi: string | null;
                    edition: string | null;
                    editor: string | null;
                    email: string | null;
                    howpublished: string | null;
                    institution: string | null;
                    journal: string | null;
                    month: string | null;
                    note: string | null;
                    number: string | null;
                    organization: string | null;
                    pages: string | null;
                    publisher: string | null;
                    school: string | null;
                    series: string | null;
                    title: string | null;
                    volume: string | null;
                    type: string | null;
                    year: string | null;
                    numpages: string | null;
                    url: string | null;
                    issue: string | null;
                    issn: string | null;
                    abstract: string | null;
                    urldate: string | null;
                    keywords: string | null;
                    copyright: string | null;
                    added: Date;
                })[];
            } & {
                id: number;
                filename: string;
                firstSync: Date;
                lastSync: Date;
            }) | null>>;
        };
        bibSync: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: any;
                _input_out: any;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, void>>;
        };
        syncBibServerSide: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: number | undefined;
                _input_out: number | undefined;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                entries: {
                    id: string;
                    BibId: number | null;
                    OwnWork: boolean;
                    ColleaguesWork: boolean;
                    read: boolean;
                    htmlCitation: string | null;
                    PdfPath: string | null;
                    address: string | null;
                    annote: string | null;
                    author: string | null;
                    booktitle: string | null;
                    chapter: string | null;
                    crossref: string | null;
                    doi: string | null;
                    edition: string | null;
                    editor: string | null;
                    email: string | null;
                    howpublished: string | null;
                    institution: string | null;
                    journal: string | null;
                    month: string | null;
                    note: string | null;
                    number: string | null;
                    organization: string | null;
                    pages: string | null;
                    publisher: string | null;
                    school: string | null;
                    series: string | null;
                    title: string | null;
                    volume: string | null;
                    type: string | null;
                    year: string | null;
                    numpages: string | null;
                    url: string | null;
                    issue: string | null;
                    issn: string | null;
                    abstract: string | null;
                    urldate: string | null;
                    keywords: string | null;
                    copyright: string | null;
                    added: Date;
                }[];
            } & {
                id: number;
                filename: string;
                firstSync: Date;
                lastSync: Date;
            }>>;
        };
        readBibFromFileSystem: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _ctx_out: object;
                _input_in: typeof import("@trpc/server").unsetMarker;
                _input_out: typeof import("@trpc/server").unsetMarker;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
                _meta: object;
            }, string | undefined>>;
        };
        getBib: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: number;
                _input_out: number;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, ({
                entries: ({
                    readingList: {
                        name: string;
                        description: string | null;
                        createdAt: Date;
                        lastUpdate: Date;
                    }[];
                    tags: {
                        value: string;
                        kanbanId: number | null;
                    }[];
                    MdxNotes: ({
                        tags: {
                            value: string;
                            kanbanId: number | null;
                        }[];
                        topics: {
                            value: string;
                            kanbanId: number | null;
                        }[];
                        subjects: {
                            value: string;
                            kanbanId: number | null;
                        }[];
                    } & {
                        id: number;
                        isProtected: boolean | null;
                        dietSummaryKey: string | null;
                        title: string;
                        latexTitle: string | null;
                        rootRelativePath: string;
                        noteType: string;
                        content: string;
                        formatted: string | null;
                        summary: string | null;
                        citationsListOrder: string[];
                        importantValues: number[];
                        imageSrc: string | null;
                        href: string;
                        sequentialKey: string | null;
                        sequentialIndex: number | null;
                        floatImages: boolean;
                        remoteUrl: string | null;
                        trackRemote: boolean;
                        outgoingQuickLinks: string[];
                        quickLink: string | null;
                        bookmarked: boolean;
                        firstSync: Date;
                        lastSync: Date;
                    })[];
                    citationGroups: {
                        name: string;
                        description: string | null;
                    }[];
                } & {
                    id: string;
                    BibId: number | null;
                    OwnWork: boolean;
                    ColleaguesWork: boolean;
                    read: boolean;
                    htmlCitation: string | null;
                    PdfPath: string | null;
                    address: string | null;
                    annote: string | null;
                    author: string | null;
                    booktitle: string | null;
                    chapter: string | null;
                    crossref: string | null;
                    doi: string | null;
                    edition: string | null;
                    editor: string | null;
                    email: string | null;
                    howpublished: string | null;
                    institution: string | null;
                    journal: string | null;
                    month: string | null;
                    note: string | null;
                    number: string | null;
                    organization: string | null;
                    pages: string | null;
                    publisher: string | null;
                    school: string | null;
                    series: string | null;
                    title: string | null;
                    volume: string | null;
                    type: string | null;
                    year: string | null;
                    numpages: string | null;
                    url: string | null;
                    issue: string | null;
                    issn: string | null;
                    abstract: string | null;
                    urldate: string | null;
                    keywords: string | null;
                    copyright: string | null;
                    added: Date;
                })[];
            } & {
                id: number;
                filename: string;
                firstSync: Date;
                lastSync: Date;
            }) | null>>;
        };
        getBibCitation: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: string[];
                _input_out: string[];
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                id: string;
                htmlCitation: string | null;
            }[]>>;
        };
        getBibEntry: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: string;
                _input_out: string;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, ({
                readingList: ({
                    bibEntries: {
                        id: string;
                        title: string | null;
                        added: Date;
                    }[];
                } & {
                    name: string;
                    description: string | null;
                    createdAt: Date;
                    lastUpdate: Date;
                })[];
                tags: {
                    value: string;
                    kanbanId: number | null;
                }[];
                MdxNotes: ({
                    tags: {
                        value: string;
                        kanbanId: number | null;
                    }[];
                    citations: {
                        id: string;
                        BibId: number | null;
                        OwnWork: boolean;
                        ColleaguesWork: boolean;
                        read: boolean;
                        htmlCitation: string | null;
                        PdfPath: string | null;
                        address: string | null;
                        annote: string | null;
                        author: string | null;
                        booktitle: string | null;
                        chapter: string | null;
                        crossref: string | null;
                        doi: string | null;
                        edition: string | null;
                        editor: string | null;
                        email: string | null;
                        howpublished: string | null;
                        institution: string | null;
                        journal: string | null;
                        month: string | null;
                        note: string | null;
                        number: string | null;
                        organization: string | null;
                        pages: string | null;
                        publisher: string | null;
                        school: string | null;
                        series: string | null;
                        title: string | null;
                        volume: string | null;
                        type: string | null;
                        year: string | null;
                        numpages: string | null;
                        url: string | null;
                        issue: string | null;
                        issn: string | null;
                        abstract: string | null;
                        urldate: string | null;
                        keywords: string | null;
                        copyright: string | null;
                        added: Date;
                    }[];
                    topics: {
                        value: string;
                        kanbanId: number | null;
                    }[];
                    subjects: {
                        value: string;
                        kanbanId: number | null;
                    }[];
                } & {
                    id: number;
                    isProtected: boolean | null;
                    dietSummaryKey: string | null;
                    title: string;
                    latexTitle: string | null;
                    rootRelativePath: string;
                    noteType: string;
                    content: string;
                    formatted: string | null;
                    summary: string | null;
                    citationsListOrder: string[];
                    importantValues: number[];
                    imageSrc: string | null;
                    href: string;
                    sequentialKey: string | null;
                    sequentialIndex: number | null;
                    floatImages: boolean;
                    remoteUrl: string | null;
                    trackRemote: boolean;
                    outgoingQuickLinks: string[];
                    quickLink: string | null;
                    bookmarked: boolean;
                    firstSync: Date;
                    lastSync: Date;
                })[];
                citationGroups: ({
                    entries: {
                        id: string;
                        BibId: number | null;
                        OwnWork: boolean;
                        ColleaguesWork: boolean;
                        read: boolean;
                        htmlCitation: string | null;
                        PdfPath: string | null;
                        address: string | null;
                        annote: string | null;
                        author: string | null;
                        booktitle: string | null;
                        chapter: string | null;
                        crossref: string | null;
                        doi: string | null;
                        edition: string | null;
                        editor: string | null;
                        email: string | null;
                        howpublished: string | null;
                        institution: string | null;
                        journal: string | null;
                        month: string | null;
                        note: string | null;
                        number: string | null;
                        organization: string | null;
                        pages: string | null;
                        publisher: string | null;
                        school: string | null;
                        series: string | null;
                        title: string | null;
                        volume: string | null;
                        type: string | null;
                        year: string | null;
                        numpages: string | null;
                        url: string | null;
                        issue: string | null;
                        issn: string | null;
                        abstract: string | null;
                        urldate: string | null;
                        keywords: string | null;
                        copyright: string | null;
                        added: Date;
                    }[];
                } & {
                    name: string;
                    description: string | null;
                })[];
            } & {
                id: string;
                BibId: number | null;
                OwnWork: boolean;
                ColleaguesWork: boolean;
                read: boolean;
                htmlCitation: string | null;
                PdfPath: string | null;
                address: string | null;
                annote: string | null;
                author: string | null;
                booktitle: string | null;
                chapter: string | null;
                crossref: string | null;
                doi: string | null;
                edition: string | null;
                editor: string | null;
                email: string | null;
                howpublished: string | null;
                institution: string | null;
                journal: string | null;
                month: string | null;
                note: string | null;
                number: string | null;
                organization: string | null;
                pages: string | null;
                publisher: string | null;
                school: string | null;
                series: string | null;
                title: string | null;
                volume: string | null;
                type: string | null;
                year: string | null;
                numpages: string | null;
                url: string | null;
                issue: string | null;
                issn: string | null;
                abstract: string | null;
                urldate: string | null;
                keywords: string | null;
                copyright: string | null;
                added: Date;
            }) | null>>;
        };
        addBibItemTag: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: {
                    tag: string;
                    bibItemId: string;
                };
                _input_out: {
                    tag: string;
                    bibItemId: string;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                tags: {
                    value: string;
                    kanbanId: number | null;
                }[];
            } & {
                id: string;
                BibId: number | null;
                OwnWork: boolean;
                ColleaguesWork: boolean;
                read: boolean;
                htmlCitation: string | null;
                PdfPath: string | null;
                address: string | null;
                annote: string | null;
                author: string | null;
                booktitle: string | null;
                chapter: string | null;
                crossref: string | null;
                doi: string | null;
                edition: string | null;
                editor: string | null;
                email: string | null;
                howpublished: string | null;
                institution: string | null;
                journal: string | null;
                month: string | null;
                note: string | null;
                number: string | null;
                organization: string | null;
                pages: string | null;
                publisher: string | null;
                school: string | null;
                series: string | null;
                title: string | null;
                volume: string | null;
                type: string | null;
                year: string | null;
                numpages: string | null;
                url: string | null;
                issue: string | null;
                issn: string | null;
                abstract: string | null;
                urldate: string | null;
                keywords: string | null;
                copyright: string | null;
                added: Date;
            }>>;
        };
        removeBibEntryTag: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: {
                    tag: string;
                    bibEntryId: string;
                };
                _input_out: {
                    tag: string;
                    bibEntryId: string;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                id: string;
                BibId: number | null;
                OwnWork: boolean;
                ColleaguesWork: boolean;
                read: boolean;
                htmlCitation: string | null;
                PdfPath: string | null;
                address: string | null;
                annote: string | null;
                author: string | null;
                booktitle: string | null;
                chapter: string | null;
                crossref: string | null;
                doi: string | null;
                edition: string | null;
                editor: string | null;
                email: string | null;
                howpublished: string | null;
                institution: string | null;
                journal: string | null;
                month: string | null;
                note: string | null;
                number: string | null;
                organization: string | null;
                pages: string | null;
                publisher: string | null;
                school: string | null;
                series: string | null;
                title: string | null;
                volume: string | null;
                type: string | null;
                year: string | null;
                numpages: string | null;
                url: string | null;
                issue: string | null;
                issn: string | null;
                abstract: string | null;
                urldate: string | null;
                keywords: string | null;
                copyright: string | null;
                added: Date;
            }>>;
        };
        bibEntryUpsert: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: any;
                _input_out: any;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                id: string;
                BibId: number | null;
                OwnWork: boolean;
                ColleaguesWork: boolean;
                read: boolean;
                htmlCitation: string | null;
                PdfPath: string | null;
                address: string | null;
                annote: string | null;
                author: string | null;
                booktitle: string | null;
                chapter: string | null;
                crossref: string | null;
                doi: string | null;
                edition: string | null;
                editor: string | null;
                email: string | null;
                howpublished: string | null;
                institution: string | null;
                journal: string | null;
                month: string | null;
                note: string | null;
                number: string | null;
                organization: string | null;
                pages: string | null;
                publisher: string | null;
                school: string | null;
                series: string | null;
                title: string | null;
                volume: string | null;
                type: string | null;
                year: string | null;
                numpages: string | null;
                url: string | null;
                issue: string | null;
                issn: string | null;
                abstract: string | null;
                urldate: string | null;
                keywords: string | null;
                copyright: string | null;
                added: Date;
            }>>;
        };
        bibFilename: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: number | undefined;
                _input_out: number | undefined;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, string | {
                filename: string;
            } | undefined>>;
        };
        getCitationGroup: {
            query: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: string;
                _input_out: string;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, ({
                entries: ({
                    tags: {
                        value: string;
                        kanbanId: number | null;
                    }[];
                    MdxNotes: {
                        id: number;
                        title: string;
                        summary: string | null;
                    }[];
                } & {
                    id: string;
                    BibId: number | null;
                    OwnWork: boolean;
                    ColleaguesWork: boolean;
                    read: boolean;
                    htmlCitation: string | null;
                    PdfPath: string | null;
                    address: string | null;
                    annote: string | null;
                    author: string | null;
                    booktitle: string | null;
                    chapter: string | null;
                    crossref: string | null;
                    doi: string | null;
                    edition: string | null;
                    editor: string | null;
                    email: string | null;
                    howpublished: string | null;
                    institution: string | null;
                    journal: string | null;
                    month: string | null;
                    note: string | null;
                    number: string | null;
                    organization: string | null;
                    pages: string | null;
                    publisher: string | null;
                    school: string | null;
                    series: string | null;
                    title: string | null;
                    volume: string | null;
                    type: string | null;
                    year: string | null;
                    numpages: string | null;
                    url: string | null;
                    issue: string | null;
                    issn: string | null;
                    abstract: string | null;
                    urldate: string | null;
                    keywords: string | null;
                    copyright: string | null;
                    added: Date;
                })[];
            } & {
                name: string;
                description: string | null;
            }) | null>>;
        };
    };
    beta: {
        parseMdxString: {
            mutate: import("@trpc/react-query").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: import("@trpc/server").DefaultErrorShape;
                    transformer: import("@trpc/server").DefaultDataTransformer;
                }>;
                _meta: object;
                _ctx_out: object;
                _input_in: {
                    content: string;
                };
                _input_out: {
                    content: string;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, string>>;
        };
    };
};
//# sourceMappingURL=client.d.ts.map