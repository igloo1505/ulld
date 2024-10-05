import { z } from "zod";
export declare const paginationProps: z.ZodObject<{
    page: z.ZodDefault<z.ZodNumber>;
    take: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    page: number;
    take: number;
}, {
    page?: number | undefined;
    take?: number | undefined;
}>;
export declare const sortDirProps: z.ZodObject<{
    sortDir: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"asc">, z.ZodLiteral<"desc">]>>;
}, "strip", z.ZodTypeAny, {
    sortDir: "desc" | "asc";
}, {
    sortDir?: "desc" | "asc" | undefined;
}>;
export declare const equationSearchParamsSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    tags: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>, string[], string | string[]>>;
    variables: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>, string[], string | string[]>>;
    query: z.ZodOptional<z.ZodString>;
    value: z.ZodOptional<z.ZodString>;
    orderBy: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"title">, z.ZodLiteral<"createdAt">]>>;
}, {
    page: z.ZodDefault<z.ZodNumber>;
    take: z.ZodDefault<z.ZodNumber>;
}>, {
    sortDir: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"asc">, z.ZodLiteral<"desc">]>>;
}>, "strip", z.ZodTypeAny, {
    page: number;
    orderBy: "title" | "createdAt";
    take: number;
    tags: string[];
    sortDir: "desc" | "asc";
    variables: string[];
    value?: string | undefined;
    query?: string | undefined;
}, {
    value?: string | undefined;
    page?: number | undefined;
    query?: string | undefined;
    orderBy?: "title" | "createdAt" | undefined;
    take?: number | undefined;
    tags?: string | string[] | undefined;
    sortDir?: "desc" | "asc" | undefined;
    variables?: string | string[] | undefined;
}>;
//# sourceMappingURL=zod.d.ts.map