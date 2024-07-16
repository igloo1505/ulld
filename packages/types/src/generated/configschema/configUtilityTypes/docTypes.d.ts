import { z } from "zod";
import { zodDocTypeInput } from "../zod/documentConfigSchema";
import { internalDocTypes } from "../zod/internalDocumentTypes";
export type DocTypes = z.output<typeof zodDocTypeInput> | z.output<typeof internalDocTypes>;
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
}, string>]>;
export type TopicZodOutput = z.output<typeof topicZodObject>;
export type SubjectZodOutput = z.output<typeof subjectZodObject>;
export type TagZodOutput = z.output<typeof tagZodObject>;
//# sourceMappingURL=docTypes.d.ts.map