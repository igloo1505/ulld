import { z } from 'zod';
import { NoteTypeCreateManyInputSchema } from '../inputTypeSchemas/NoteTypeCreateManyInputSchema.js';
export const NoteTypeCreateManyArgsSchema = z.object({
    data: z.union([NoteTypeCreateManyInputSchema, NoteTypeCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default NoteTypeCreateManyArgsSchema;
