import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { ReadingListWhereInputSchema } from '../inputTypeSchemas/ReadingListWhereInputSchema.js'
import { ReadingListOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ReadingListOrderByWithAggregationInputSchema.js'
import { ReadingListScalarFieldEnumSchema } from '../inputTypeSchemas/ReadingListScalarFieldEnumSchema.js'
import { ReadingListScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ReadingListScalarWhereWithAggregatesInputSchema.js'
export const ReadingListGroupByArgsSchema: z.ZodType<Prisma.ReadingListGroupByArgs> = z.object({
  where: ReadingListWhereInputSchema.optional(),
  orderBy: z.union([ ReadingListOrderByWithAggregationInputSchema.array(),ReadingListOrderByWithAggregationInputSchema ]).optional(),
  by: ReadingListScalarFieldEnumSchema.array(),
  having: ReadingListScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default ReadingListGroupByArgsSchema;