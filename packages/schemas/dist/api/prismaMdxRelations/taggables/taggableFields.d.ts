import { z } from "zod";
export declare const taggableFields: z.ZodObject<{
    topics: z.ZodDefault<z.ZodArray<z.ZodObject<{
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
    }, {
        value: string;
    }>, "many">>;
    subjects: z.ZodDefault<z.ZodArray<z.ZodObject<{
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
    }, {
        value: string;
    }>, "many">>;
    tags: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodObject<{
        value: z.ZodString;
        kanbanId: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodNull, z.ZodUndefined]>>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        kanbanId?: number | null | undefined;
    }, {
        value: string;
        kanbanId?: number | null | undefined;
    }>, z.ZodEffects<z.ZodString, {
        value: string;
        kanbanId?: number | null | undefined;
    }, string>]>, "many">>;
}, "strip", z.ZodTypeAny, {
    tags: {
        value: string;
        kanbanId?: number | null | undefined;
    }[];
    topics: {
        value: string;
    }[];
    subjects: {
        value: string;
    }[];
}, {
    tags?: (string | {
        value: string;
        kanbanId?: number | null | undefined;
    })[] | undefined;
    topics?: {
        value: string;
    }[] | undefined;
    subjects?: {
        value: string;
    }[] | undefined;
}>;
//# sourceMappingURL=taggableFields.d.ts.map