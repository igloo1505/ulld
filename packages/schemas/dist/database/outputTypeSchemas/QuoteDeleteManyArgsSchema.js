import { z } from 'zod';
import { QuoteWhereInputSchema } from '../inputTypeSchemas/QuoteWhereInputSchema.js';
export const QuoteDeleteManyArgsSchema = z.object({
    where: QuoteWhereInputSchema.optional(),
}).strict();
export default QuoteDeleteManyArgsSchema;
