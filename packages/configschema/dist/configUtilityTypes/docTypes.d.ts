import { z } from "zod";
import { zodDocTypeInput } from "../zod/documentConfigSchema.js";
import { internalDocTypes } from "../zod/internalDocumentTypes.js";
export type DocTypes = string | z.output<typeof zodDocTypeInput> | z.output<typeof internalDocTypes>;
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
export type TopicZodOutput = z.output<typeof topicZodObject>;
export type SubjectZodOutput = z.output<typeof subjectZodObject>;
export type TagZodOutput = z.output<typeof tagZodObject>;
//# sourceMappingURL=docTypes.d.ts.map