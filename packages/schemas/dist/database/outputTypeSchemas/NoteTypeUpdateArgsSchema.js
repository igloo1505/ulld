import { z } from 'zod';
import { NoteTypeUpdateInputSchema } from '../inputTypeSchemas/NoteTypeUpdateInputSchema.js';
import { NoteTypeUncheckedUpdateInputSchema } from '../inputTypeSchemas/NoteTypeUncheckedUpdateInputSchema.js';
import { NoteTypeWhereUniqueInputSchema } from '../inputTypeSchemas/NoteTypeWhereUniqueInputSchema.js';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const NoteTypeSelectSchema = z.object({
    name: z.boolean().optional(),
}).strict();
export const NoteTypeUpdateArgsSchema = z.object({
    select: NoteTypeSelectSchema.optional(),
    data: z.union([NoteTypeUpdateInputSchema, NoteTypeUncheckedUpdateInputSchema]),
    where: NoteTypeWhereUniqueInputSchema,
}).strict();
export default NoteTypeUpdateArgsSchema;
