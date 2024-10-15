import { z } from 'zod';
import { NoteTypeCreateManyInputSchema } from '../inputTypeSchemas/NoteTypeCreateManyInputSchema.js';
export const NoteTypeCreateManyAndReturnArgsSchema = z.object({
    data: z.union([NoteTypeCreateManyInputSchema, NoteTypeCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default NoteTypeCreateManyAndReturnArgsSchema;
