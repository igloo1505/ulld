import { z } from 'zod';
import { BibCreateManyInputSchema } from '../inputTypeSchemas/BibCreateManyInputSchema.js';
export const BibCreateManyAndReturnArgsSchema = z.object({
    data: z.union([BibCreateManyInputSchema, BibCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default BibCreateManyAndReturnArgsSchema;
