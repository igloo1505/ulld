export declare const trpcRoot: {
    _config: import("@trpc/server").RootConfig<{
        ctx: object;
        meta: object;
        errorShape: import("@trpc/server").DefaultErrorShape;
        transformer: import("@trpc/server").DefaultDataTransformer;
    }>;
    procedure: import("@trpc/server").ProcedureBuilder<{
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
    }>;
    middleware: <TNewParams extends import("@trpc/server").ProcedureParams<import("@trpc/server").AnyRootConfig, unknown, unknown, unknown, unknown, unknown, unknown>>(fn: import("@trpc/server").MiddlewareFunction<{
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _ctx_out: {};
        _input_out: typeof import("@trpc/server").unsetMarker;
        _input_in: unknown;
        _output_in: unknown;
        _output_out: unknown;
        _meta: object;
    }, TNewParams>) => import("@trpc/server").MiddlewareBuilder<{
        _config: import("@trpc/server").RootConfig<{
            ctx: unknown extends object ? object : object;
            meta: unknown extends object ? object : object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DataTransformerOptions | undefined extends import("@trpc/server").DataTransformerOptions ? import("@trpc/server").DataTransformerOptions & (import("@trpc/server").DataTransformerOptions | undefined) : import("@trpc/server").DefaultDataTransformer;
        }>;
        _ctx_out: {};
        _input_out: typeof import("@trpc/server").unsetMarker;
        _input_in: unknown;
        _output_in: unknown;
        _output_out: unknown;
        _meta: unknown extends object ? object : object;
    }, TNewParams>;
    router: <TProcRouterRecord extends import("@trpc/server").ProcedureRouterRecord>(procedures: TProcRouterRecord) => import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
        ctx: unknown extends object ? object : object;
        meta: unknown extends object ? object : object;
        errorShape: import("@trpc/server").DefaultErrorShape;
        transformer: import("@trpc/server").DataTransformerOptions | undefined extends import("@trpc/server").DataTransformerOptions ? import("@trpc/server").DataTransformerOptions & (import("@trpc/server").DataTransformerOptions | undefined) : import("@trpc/server").DefaultDataTransformer;
    }>, TProcRouterRecord>;
    mergeRouters: typeof import("@trpc/server").mergeRouters;
    createCallerFactory: <TRouter extends import("@trpc/server").Router<import("@trpc/server").AnyRouterDef<import("@trpc/server").RootConfig<{
        ctx: object;
        meta: object;
        errorShape: import("@trpc/server").DefaultErrorShape;
        transformer: import("@trpc/server").DefaultDataTransformer;
    }>, any>>>(router: TRouter) => import("@trpc/server").RouterCaller<TRouter["_def"]>;
};
export declare const router: <TProcRouterRecord extends import("@trpc/server").ProcedureRouterRecord>(procedures: TProcRouterRecord) => import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
    ctx: unknown extends object ? object : object;
    meta: unknown extends object ? object : object;
    errorShape: import("@trpc/server").DefaultErrorShape;
    transformer: import("@trpc/server").DataTransformerOptions | undefined extends import("@trpc/server").DataTransformerOptions ? import("@trpc/server").DataTransformerOptions & (import("@trpc/server").DataTransformerOptions | undefined) : import("@trpc/server").DefaultDataTransformer;
}>, TProcRouterRecord>;
export declare const publicProcedure: import("@trpc/server").ProcedureBuilder<{
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
}>;
//# sourceMappingURL=trpc.d.ts.map