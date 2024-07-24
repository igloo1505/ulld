import { z } from 'zod';
export declare const equationItemSchema: z.ZodObject<{
    id: z.ZodNumber;
    equationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    title: z.ZodEffects<z.ZodString, string | null | undefined, string>;
    desc: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null | undefined, string | null | undefined>;
    content: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string | null | undefined, string>;
    asPython: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    variables: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    tags: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        value: z.ZodString;
        kanbanId: z.ZodDefault<z.ZodUnion<[z.ZodNumber, z.ZodNull, z.ZodUndefined]>>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        kanbanId: number | null;
    }, {
        value: string;
        kanbanId?: number | null | undefined;
    }>, z.ZodEffects<z.ZodString, {
        value: string;
        kanbanId: number | null;
    }, string>]>, "many">;
    subjects: z.ZodArray<z.ZodObject<{
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
    }, {
        value: string;
    }>, "many">;
    topics: z.ZodArray<z.ZodObject<{
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
    }, {
        value: string;
    }>, "many">;
    createdAt: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, string | Date | null | undefined, string | Date | null | undefined>;
}, "strip", z.ZodTypeAny, {
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
}, {
    tags: (string | {
        value: string;
        kanbanId?: number | null | undefined;
    })[];
    id: number;
    title: string;
    content: string;
    topics: {
        value: string;
    }[];
    subjects: {
        value: string;
    }[];
    equationId?: string | null | undefined;
    desc?: string | null | undefined;
    asPython?: string | null | undefined;
    variables?: string[] | undefined;
    createdAt?: string | Date | null | undefined;
}>;
//# sourceMappingURL=equationItemSchema.d.ts.map