import { z } from 'zod';
import type { MdxNoteWithRelations } from './MdxNoteSchema.js';
import type { MdxNotePartialWithRelations } from './MdxNoteSchema.js';
import type { IpynbWithRelations } from './IpynbSchema.js';
import type { IpynbPartialWithRelations } from './IpynbSchema.js';
export declare const SequentialNoteListSchema: z.ZodObject<{
    sequentialKey: z.ZodString;
}, "strip", z.ZodTypeAny, {
    sequentialKey: string;
}, {
    sequentialKey: string;
}>;
export type SequentialNoteList = z.infer<typeof SequentialNoteListSchema>;
export declare const SequentialNoteListPartialSchema: z.ZodObject<{
    sequentialKey: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    sequentialKey?: string | undefined;
}, {
    sequentialKey?: string | undefined;
}>;
export type SequentialNoteListPartial = z.infer<typeof SequentialNoteListPartialSchema>;
export type SequentialNoteListRelations = {
    MdxNote: MdxNoteWithRelations[];
    Ipynb: IpynbWithRelations[];
};
export type SequentialNoteListWithRelations = z.infer<typeof SequentialNoteListSchema> & SequentialNoteListRelations;
export declare const SequentialNoteListWithRelationsSchema: z.ZodType<SequentialNoteListWithRelations>;
export type SequentialNoteListPartialRelations = {
    MdxNote?: MdxNotePartialWithRelations[];
    Ipynb?: IpynbPartialWithRelations[];
};
export type SequentialNoteListPartialWithRelations = z.infer<typeof SequentialNoteListPartialSchema> & SequentialNoteListPartialRelations;
export declare const SequentialNoteListPartialWithRelationsSchema: z.ZodType<SequentialNoteListPartialWithRelations>;
export type SequentialNoteListWithPartialRelations = z.infer<typeof SequentialNoteListSchema> & SequentialNoteListPartialRelations;
export declare const SequentialNoteListWithPartialRelationsSchema: z.ZodType<SequentialNoteListWithPartialRelations>;
export default SequentialNoteListSchema;
//# sourceMappingURL=SequentialNoteListSchema.d.ts.map