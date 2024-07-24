export declare const qaRouter: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
    ctx: object;
    meta: object;
    errorShape: import("@trpc/server").DefaultErrorShape;
    transformer: import("@trpc/server").DefaultDataTransformer;
}>, {
    saveQA: import("@trpc/server").BuildProcedure<"mutation", {
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
    }>;
    getSpecificQA: import("@trpc/server").BuildProcedure<"query", {
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
    }) | null>;
    addQAResult: import("@trpc/server").BuildProcedure<"mutation", {
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
    } | undefined>;
    getQaAutocompleteOptions: import("@trpc/server").BuildProcedure<"query", {
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
    }, string[]>;
    getQaExam: import("@trpc/server").BuildProcedure<"query", {
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
    })[]>;
}>;
//# sourceMappingURL=qa.d.ts.map