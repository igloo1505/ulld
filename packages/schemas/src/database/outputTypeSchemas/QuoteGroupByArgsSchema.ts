import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/QuoteWhereInputSchema.js
..//inputTypeSchemas/QuoteOrderByWithAggregationInputSchema.js
..//inputTypeSchemas/QuoteScalarFieldEnumSchema.js
..//inputTypeSchemas/QuoteScalarWhereWithAggregatesInputSchema.js
export const QuoteGroupByArgsSchema: z.ZodType<Prisma.QuoteGroupByArgs> = z.object({
  where: QuoteWhereInputSchema.optional(),
  orderBy: z.union([ QuoteOrderByWithAggregationInputSchema.array(),QuoteOrderByWithAggregationInputSchema ]).optional(),
  by: QuoteScalarFieldEnumSchema.array(),
  having: QuoteScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default QuoteGroupByArgsSchema;