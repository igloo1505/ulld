import { z } from 'zod';
export declare const topicZodObject: z.ZodObject<{
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
}, {
    value: string;
}>;
export declare const subjectZodObject: z.ZodObject<{
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
}, {
    value: string;
}>;
export declare const tagZodObject: z.ZodUnion<[z.ZodObject<{
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
}, string>]>;
//# sourceMappingURL=classProps.d.ts.map