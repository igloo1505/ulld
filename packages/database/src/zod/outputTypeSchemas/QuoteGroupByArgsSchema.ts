import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuoteWhereInputSchema } from '../inputTypeSchemas/QuoteWhereInputSchema'
import { QuoteOrderByWithAggregationInputSchema } from '../inputTypeSchemas/QuoteOrderByWithAggregationInputSchema'
import { QuoteScalarFieldEnumSchema } from '../inputTypeSchemas/QuoteScalarFieldEnumSchema'
import { QuoteScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/QuoteScalarWhereWithAggregatesInputSchema'

export const QuoteGroupByArgsSchema: z.ZodType<Prisma.QuoteGroupByArgs> = z.object({
  where: QuoteWhereInputSchema.optional(),
  orderBy: z.union([ QuoteOrderByWithAggregationInputSchema.array(),QuoteOrderByWithAggregationInputSchema ]).optional(),
  by: QuoteScalarFieldEnumSchema.array(),
  having: QuoteScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default QuoteGroupByArgsSchema;
