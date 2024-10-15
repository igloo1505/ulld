import { z } from 'zod';
import { MdxNoteCreateManyInputSchema } from '../inputTypeSchemas/MdxNoteCreateManyInputSchema.js';
export const MdxNoteCreateManyAndReturnArgsSchema = z.object({
    data: z.union([MdxNoteCreateManyInputSchema, MdxNoteCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default MdxNoteCreateManyAndReturnArgsSchema;
