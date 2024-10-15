import { z } from 'zod';
import type { BibEntryWithRelations } from './BibEntrySchema.js';
import type { BibEntryPartialWithRelations } from './BibEntrySchema.js';
import type { MdxNoteWithRelations } from './MdxNoteSchema.js';
import type { MdxNotePartialWithRelations } from './MdxNoteSchema.js';
import type { IpynbWithRelations } from './IpynbSchema.js';
import type { IpynbPartialWithRelations } from './IpynbSchema.js';
export declare const ReadingListSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodDate;
    lastUpdate: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    name: string;
    description: string | null;
    createdAt: Date;
    lastUpdate: Date;
}, {
    name: string;
    description: string | null;
    createdAt: Date;
    lastUpdate: Date;
}>;
export type ReadingList = z.infer<typeof ReadingListSchema>;
export declare const ReadingListPartialSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodOptional<z.ZodDate>;
    lastUpdate: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    description?: string | null | undefined;
    createdAt?: Date | undefined;
    lastUpdate?: Date | undefined;
}, {
    name?: string | undefined;
    description?: string | null | undefined;
    createdAt?: Date | undefined;
    lastUpdate?: Date | undefined;
}>;
export type ReadingListPartial = z.infer<typeof ReadingListPartialSchema>;
export type ReadingListRelations = {
    bibEntries: BibEntryWithRelations[];
    mdxNotes: MdxNoteWithRelations[];
    ipynbNotes: IpynbWithRelations[];
};
export type ReadingListWithRelations = z.infer<typeof ReadingListSchema> & ReadingListRelations;
export declare const ReadingListWithRelationsSchema: z.ZodType<ReadingListWithRelations>;
export type ReadingListPartialRelations = {
    bibEntries?: BibEntryPartialWithRelations[];
    mdxNotes?: MdxNotePartialWithRelations[];
    ipynbNotes?: IpynbPartialWithRelations[];
};
export type ReadingListPartialWithRelations = z.infer<typeof ReadingListPartialSchema> & ReadingListPartialRelations;
export declare const ReadingListPartialWithRelationsSchema: z.ZodType<ReadingListPartialWithRelations>;
export type ReadingListWithPartialRelations = z.infer<typeof ReadingListSchema> & ReadingListPartialRelations;
export declare const ReadingListWithPartialRelationsSchema: z.ZodType<ReadingListWithPartialRelations>;
export default ReadingListSchema;
//# sourceMappingURL=ReadingListSchema.d.ts.map