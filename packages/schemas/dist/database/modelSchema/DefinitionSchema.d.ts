import { z } from 'zod';
import type { MdxNoteWithRelations } from './MdxNoteSchema.js';
import type { MdxNotePartialWithRelations } from './MdxNoteSchema.js';
export declare const DefinitionSchema: z.ZodObject<{
    id: z.ZodString;
    label: z.ZodNullable<z.ZodString>;
    content: z.ZodNullable<z.ZodString>;
    alphabeticalLabel: z.ZodNullable<z.ZodString>;
    mdxNoteId: z.ZodNullable<z.ZodNumber>;
    createdAt: z.ZodDate;
    lastAccess: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    lastAccess: Date;
    id: string;
    createdAt: Date;
    label: string | null;
    content: string | null;
    alphabeticalLabel: string | null;
    mdxNoteId: number | null;
}, {
    lastAccess: Date;
    id: string;
    createdAt: Date;
    label: string | null;
    content: string | null;
    alphabeticalLabel: string | null;
    mdxNoteId: number | null;
}>;
export type Definition = z.infer<typeof DefinitionSchema>;
export declare const DefinitionPartialSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    label: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    content: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    alphabeticalLabel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    mdxNoteId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    createdAt: z.ZodOptional<z.ZodDate>;
    lastAccess: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    lastAccess?: Date | undefined;
    id?: string | undefined;
    createdAt?: Date | undefined;
    label?: string | null | undefined;
    content?: string | null | undefined;
    alphabeticalLabel?: string | null | undefined;
    mdxNoteId?: number | null | undefined;
}, {
    lastAccess?: Date | undefined;
    id?: string | undefined;
    createdAt?: Date | undefined;
    label?: string | null | undefined;
    content?: string | null | undefined;
    alphabeticalLabel?: string | null | undefined;
    mdxNoteId?: number | null | undefined;
}>;
export type DefinitionPartial = z.infer<typeof DefinitionPartialSchema>;
export type DefinitionRelations = {
    mdxNote?: MdxNoteWithRelations | null;
};
export type DefinitionWithRelations = z.infer<typeof DefinitionSchema> & DefinitionRelations;
export declare const DefinitionWithRelationsSchema: z.ZodType<DefinitionWithRelations>;
export type DefinitionPartialRelations = {
    mdxNote?: MdxNotePartialWithRelations | null;
};
export type DefinitionPartialWithRelations = z.infer<typeof DefinitionPartialSchema> & DefinitionPartialRelations;
export declare const DefinitionPartialWithRelationsSchema: z.ZodType<DefinitionPartialWithRelations>;
export type DefinitionWithPartialRelations = z.infer<typeof DefinitionSchema> & DefinitionPartialRelations;
export declare const DefinitionWithPartialRelationsSchema: z.ZodType<DefinitionWithPartialRelations>;
export default DefinitionSchema;
//# sourceMappingURL=DefinitionSchema.d.ts.map