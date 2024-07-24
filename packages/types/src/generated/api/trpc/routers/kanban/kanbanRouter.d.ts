import { z } from "zod";
export declare const createKanBanFormDataSchema: z.ZodObject<{
    title: z.ZodString;
    subjects: z.ZodArray<z.ZodString, "many">;
    topics: z.ZodArray<z.ZodString, "many">;
    tags: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    tags: string[];
    title: string;
    topics: string[];
    subjects: string[];
}, {
    tags: string[];
    title: string;
    topics: string[];
    subjects: string[];
}>;
export declare const createKanBanSchemaInputs: z.ZodObject<{
    subjectInput: z.ZodString;
    topicInput: z.ZodString;
    tagInput: z.ZodString;
}, "strip", z.ZodTypeAny, {
    tagInput: string;
    topicInput: string;
    subjectInput: string;
}, {
    tagInput: string;
    topicInput: string;
    subjectInput: string;
}>;
export declare const kanBanBoardsRouter: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
    ctx: object;
    meta: object;
    errorShape: import("@trpc/server").DefaultErrorShape;
    transformer: import("@trpc/server").DefaultDataTransformer;
}>, {
    getAllBoards: import("@trpc/server").BuildProcedure<"query", {
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
    }[]>;
    createNewBoard: import("@trpc/server").BuildProcedure<"mutation", {
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
    }>;
    getBoardById: import("@trpc/server").BuildProcedure<"query", {
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
    }) | null>;
    appendNewListToBoard: import("@trpc/server").BuildProcedure<"mutation", {
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
    }) | undefined>;
}>;
//# sourceMappingURL=kanbanRouter.d.ts.map