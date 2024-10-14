import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuoteWhereInputSchema } from '../inputTypeSchemas/QuoteWhereInputSchema'
import { QuoteOrderByWithRelationInputSchema } from '../inputTypeSchemas/QuoteOrderByWithRelationInputSchema'
import { QuoteWhereUniqueInputSchema } from '../inputTypeSchemas/QuoteWhereUniqueInputSchema'

export const QuoteAggregateArgsSchema: z.ZodType<Prisma.QuoteAggregateArgs> = z.object({
  where: QuoteWhereInputSchema.optional(),
  orderBy: z.union([ QuoteOrderByWithRelationInputSchema.array(),QuoteOrderByWithRelationInputSchema ]).optional(),
  cursor: QuoteWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default QuoteAggregateArgsSchema;
