import { z } from 'zod';
export declare const todoListZodObject: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodNumber;
    label: z.ZodString;
    tasks: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
}, Pick<{
    name: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    bibEntries: z.ZodArray<z.ZodAny, "many">;
    mdxNotes: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
    ipynbNotes: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
    createdAt: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
    lastUpdate: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
}, "createdAt" | "lastUpdate">>, {
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
}>, "strip", z.ZodTypeAny, {
    id: number;
    createdAt: Date;
    lastUpdate: Date;
    topics: {
        value: string;
    }[];
    subjects: {
        value: string;
    }[];
    tags: {
        value: string;
        kanbanId?: number | null | undefined;
    }[];
    label: string;
    tasks: any[];
}, {
    id: number;
    label: string;
    createdAt?: string | Date | null | undefined;
    lastUpdate?: string | Date | null | undefined;
    topics?: {
        value: string;
    }[] | undefined;
    subjects?: {
        value: string;
    }[] | undefined;
    tags?: (string | {
        value: string;
        kanbanId?: number | null | undefined;
    })[] | undefined;
    tasks?: any[] | undefined;
}>;
//# sourceMappingURL=classProps.d.ts.map