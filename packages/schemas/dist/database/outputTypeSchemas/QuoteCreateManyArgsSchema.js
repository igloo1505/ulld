import { z } from 'zod';
import { QuoteCreateManyInputSchema } from '../inputTypeSchemas/QuoteCreateManyInputSchema.js';
export const QuoteCreateManyArgsSchema = z.object({
    data: z.union([QuoteCreateManyInputSchema, QuoteCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default QuoteCreateManyArgsSchema;
