import { z } from 'zod';
import { NoteTypeWhereUniqueInputSchema } from '../inputTypeSchemas/NoteTypeWhereUniqueInputSchema.js';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const NoteTypeSelectSchema = z.object({
    name: z.boolean().optional(),
}).strict();
export const NoteTypeFindUniqueArgsSchema = z.object({
    select: NoteTypeSelectSchema.optional(),
    where: NoteTypeWhereUniqueInputSchema,
}).strict();
export default NoteTypeFindUniqueArgsSchema;
