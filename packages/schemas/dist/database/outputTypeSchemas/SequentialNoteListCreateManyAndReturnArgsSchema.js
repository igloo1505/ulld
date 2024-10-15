import { z } from 'zod';
import { SequentialNoteListCreateManyInputSchema } from '../inputTypeSchemas/SequentialNoteListCreateManyInputSchema.js';
export const SequentialNoteListCreateManyAndReturnArgsSchema = z.object({
    data: z.union([SequentialNoteListCreateManyInputSchema, SequentialNoteListCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default SequentialNoteListCreateManyAndReturnArgsSchema;
