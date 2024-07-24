import { Prisma } from "@ulld/database/internalDatabaseTypes";
declare const equationsRouter: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
    ctx: object;
    meta: object;
    errorShape: import("@trpc/server").DefaultErrorShape;
    transformer: import("@trpc/server").DefaultDataTransformer;
}>, {
    getEquationById: import("@trpc/server").BuildProcedure<"mutation", {
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
            input: Prisma.JsonValue;
            output: number;
        }[];
        content: string;
        equationId: string | null;
        asPython: string | null;
        variables: string[];
    } | null>;
    getParsedEquationById: import("@trpc/server").BuildProcedure<"mutation", {
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
    }>;
    getEquationEmbedProps: import("@trpc/server").BuildProcedure<"query", {
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
    }>;
    deleteEquationById: import("@trpc/server").BuildProcedure<"mutation", {
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
        variableLegend: Prisma.JsonValue | null;
        variables: string[];
        keywords: string[];
        createdAt: Date;
    }>;
    getEquationsList: import("@trpc/server").BuildProcedure<"query", {
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
            variableLegend: Prisma.JsonValue | null;
            variables: string[];
            keywords: string[];
            createdAt: Date;
        }[];
        tags: string[];
        variables: string[];
    }>;
    addEquation: import("@trpc/server").BuildProcedure<"mutation", {
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
        variableLegend: Prisma.JsonValue | null;
        variables: string[];
        keywords: string[];
        createdAt: Date;
    }>;
    mathStringArrayToLatex: import("@trpc/server").BuildProcedure<"mutation", {
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
    }[]>;
    getIdFromEquationId: import("@trpc/server").BuildProcedure<"query", {
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
    } | null>;
}>;
export default equationsRouter;
//# sourceMappingURL=equationsRouter.d.ts.map