import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/QuoteWhereInputSchema.js
..//inputTypeSchemas/QuoteOrderByWithRelationInputSchema.js
..//inputTypeSchemas/QuoteWhereUniqueInputSchema.js
export const QuoteAggregateArgsSchema: z.ZodType<Prisma.QuoteAggregateArgs> = z.object({
  where: QuoteWhereInputSchema.optional(),
  orderBy: z.union([ QuoteOrderByWithRelationInputSchema.array(),QuoteOrderByWithRelationInputSchema ]).optional(),
  cursor: QuoteWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default QuoteAggregateArgsSchema;