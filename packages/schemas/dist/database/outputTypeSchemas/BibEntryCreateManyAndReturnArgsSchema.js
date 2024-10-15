import { z } from 'zod';
import { BibEntryCreateManyInputSchema } from '../inputTypeSchemas/BibEntryCreateManyInputSchema.js';
export const BibEntryCreateManyAndReturnArgsSchema = z.object({
    data: z.union([BibEntryCreateManyInputSchema, BibEntryCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default BibEntryCreateManyAndReturnArgsSchema;
