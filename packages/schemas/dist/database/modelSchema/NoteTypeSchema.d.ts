import { z } from 'zod';
export declare const NoteTypeSchema: z.ZodObject<{
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
}, {
    name: string;
}>;
export type NoteType = z.infer<typeof NoteTypeSchema>;
export declare const NoteTypePartialSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
}, {
    name?: string | undefined;
}>;
export type NoteTypePartial = z.infer<typeof NoteTypePartialSchema>;
export default NoteTypeSchema;
//# sourceMappingURL=NoteTypeSchema.d.ts.map