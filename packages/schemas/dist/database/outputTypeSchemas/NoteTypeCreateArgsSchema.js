import { z } from 'zod';
import { NoteTypeCreateInputSchema } from '../inputTypeSchemas/NoteTypeCreateInputSchema.js';
import { NoteTypeUncheckedCreateInputSchema } from '../inputTypeSchemas/NoteTypeUncheckedCreateInputSchema.js';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const NoteTypeSelectSchema = z.object({
    name: z.boolean().optional(),
}).strict();
export const NoteTypeCreateArgsSchema = z.object({
    select: NoteTypeSelectSchema.optional(),
    data: z.union([NoteTypeCreateInputSchema, NoteTypeUncheckedCreateInputSchema]),
}).strict();
export default NoteTypeCreateArgsSchema;
