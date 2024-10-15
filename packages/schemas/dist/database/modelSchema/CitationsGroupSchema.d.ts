import { z } from 'zod';
import type { BibEntryWithRelations } from './BibEntrySchema.js';
import type { BibEntryPartialWithRelations } from './BibEntrySchema.js';
export declare const CitationsGroupSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    description: string | null;
}, {
    name: string;
    description: string | null;
}>;
export type CitationsGroup = z.infer<typeof CitationsGroupSchema>;
export declare const CitationsGroupPartialSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    description?: string | null | undefined;
}, {
    name?: string | undefined;
    description?: string | null | undefined;
}>;
export type CitationsGroupPartial = z.infer<typeof CitationsGroupPartialSchema>;
export type CitationsGroupRelations = {
    entries: BibEntryWithRelations[];
};
export type CitationsGroupWithRelations = z.infer<typeof CitationsGroupSchema> & CitationsGroupRelations;
export declare const CitationsGroupWithRelationsSchema: z.ZodType<CitationsGroupWithRelations>;
export type CitationsGroupPartialRelations = {
    entries?: BibEntryPartialWithRelations[];
};
export type CitationsGroupPartialWithRelations = z.infer<typeof CitationsGroupPartialSchema> & CitationsGroupPartialRelations;
export declare const CitationsGroupPartialWithRelationsSchema: z.ZodType<CitationsGroupPartialWithRelations>;
export type CitationsGroupWithPartialRelations = z.infer<typeof CitationsGroupSchema> & CitationsGroupPartialRelations;
export declare const CitationsGroupWithPartialRelationsSchema: z.ZodType<CitationsGroupWithPartialRelations>;
export default CitationsGroupSchema;
//# sourceMappingURL=CitationsGroupSchema.d.ts.map