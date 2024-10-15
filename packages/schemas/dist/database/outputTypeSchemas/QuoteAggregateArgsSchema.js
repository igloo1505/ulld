import { z } from 'zod';
import { QuoteWhereInputSchema } from '../inputTypeSchemas/QuoteWhereInputSchema.js';
import { QuoteOrderByWithRelationInputSchema } from '../inputTypeSchemas/QuoteOrderByWithRelationInputSchema.js';
import { QuoteWhereUniqueInputSchema } from '../inputTypeSchemas/QuoteWhereUniqueInputSchema.js';
export const QuoteAggregateArgsSchema = z.object({
    where: QuoteWhereInputSchema.optional(),
    orderBy: z.union([QuoteOrderByWithRelationInputSchema.array(), QuoteOrderByWithRelationInputSchema]).optional(),
    cursor: QuoteWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export default QuoteAggregateArgsSchema;
