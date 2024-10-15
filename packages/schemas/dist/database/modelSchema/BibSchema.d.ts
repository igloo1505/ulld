import { z } from 'zod';
import type { BibEntryWithRelations } from './BibEntrySchema.js';
import type { BibEntryPartialWithRelations } from './BibEntrySchema.js';
export declare const BibSchema: z.ZodObject<{
    id: z.ZodNumber;
    filename: z.ZodString;
    firstSync: z.ZodDate;
    lastSync: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    firstSync: Date;
    filename: string;
    id: number;
    lastSync: Date;
}, {
    firstSync: Date;
    filename: string;
    id: number;
    lastSync: Date;
}>;
export type Bib = z.infer<typeof BibSchema>;
export declare const BibPartialSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    filename: z.ZodOptional<z.ZodString>;
    firstSync: z.ZodOptional<z.ZodDate>;
    lastSync: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    firstSync?: Date | undefined;
    filename?: string | undefined;
    id?: number | undefined;
    lastSync?: Date | undefined;
}, {
    firstSync?: Date | undefined;
    filename?: string | undefined;
    id?: number | undefined;
    lastSync?: Date | undefined;
}>;
export type BibPartial = z.infer<typeof BibPartialSchema>;
export type BibRelations = {
    entries: BibEntryWithRelations[];
};
export type BibWithRelations = z.infer<typeof BibSchema> & BibRelations;
export declare const BibWithRelationsSchema: z.ZodType<BibWithRelations>;
export type BibPartialRelations = {
    entries?: BibEntryPartialWithRelations[];
};
export type BibPartialWithRelations = z.infer<typeof BibPartialSchema> & BibPartialRelations;
export declare const BibPartialWithRelationsSchema: z.ZodType<BibPartialWithRelations>;
export type BibWithPartialRelations = z.infer<typeof BibSchema> & BibPartialRelations;
export declare const BibWithPartialRelationsSchema: z.ZodType<BibWithPartialRelations>;
export default BibSchema;
//# sourceMappingURL=BibSchema.d.ts.map