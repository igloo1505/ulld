import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TopicWhereInputSchema } from '../inputTypeSchemas/TopicWhereInputSchema'
import { TopicOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TopicOrderByWithAggregationInputSchema'
import { TopicScalarFieldEnumSchema } from '../inputTypeSchemas/TopicScalarFieldEnumSchema'
import { TopicScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TopicScalarWhereWithAggregatesInputSchema'

export const TopicGroupByArgsSchema: z.ZodType<Prisma.TopicGroupByArgs> = z.object({
  where: TopicWhereInputSchema.optional(),
  orderBy: z.union([ TopicOrderByWithAggregationInputSchema.array(),TopicOrderByWithAggregationInputSchema ]).optional(),
  by: TopicScalarFieldEnumSchema.array(),
  having: TopicScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default TopicGroupByArgsSchema;
