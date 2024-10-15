import { z } from 'zod';
import { QuoteUpdateManyMutationInputSchema } from '../inputTypeSchemas/QuoteUpdateManyMutationInputSchema.js';
import { QuoteUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/QuoteUncheckedUpdateManyInputSchema.js';
import { QuoteWhereInputSchema } from '../inputTypeSchemas/QuoteWhereInputSchema.js';
export const QuoteUpdateManyArgsSchema = z.object({
    data: z.union([QuoteUpdateManyMutationInputSchema, QuoteUncheckedUpdateManyInputSchema]),
    where: QuoteWhereInputSchema.optional(),
}).strict();
export default QuoteUpdateManyArgsSchema;
