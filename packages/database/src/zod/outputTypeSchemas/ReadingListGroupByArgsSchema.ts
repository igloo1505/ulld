import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReadingListWhereInputSchema } from '../inputTypeSchemas/ReadingListWhereInputSchema'
import { ReadingListOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ReadingListOrderByWithAggregationInputSchema'
import { ReadingListScalarFieldEnumSchema } from '../inputTypeSchemas/ReadingListScalarFieldEnumSchema'
import { ReadingListScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ReadingListScalarWhereWithAggregatesInputSchema'

export const ReadingListGroupByArgsSchema: z.ZodType<Prisma.ReadingListGroupByArgs> = z.object({
  where: ReadingListWhereInputSchema.optional(),
  orderBy: z.union([ ReadingListOrderByWithAggregationInputSchema.array(),ReadingListOrderByWithAggregationInputSchema ]).optional(),
  by: ReadingListScalarFieldEnumSchema.array(),
  having: ReadingListScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ReadingListGroupByArgsSchema;
