import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TopicWhereInputSchema } from '../inputTypeSchemas/TopicWhereInputSchema'
import { TopicOrderByWithRelationInputSchema } from '../inputTypeSchemas/TopicOrderByWithRelationInputSchema'
import { TopicWhereUniqueInputSchema } from '../inputTypeSchemas/TopicWhereUniqueInputSchema'

export const TopicAggregateArgsSchema: z.ZodType<Prisma.TopicAggregateArgs> = z.object({
  where: TopicWhereInputSchema.optional(),
  orderBy: z.union([ TopicOrderByWithRelationInputSchema.array(),TopicOrderByWithRelationInputSchema ]).optional(),
  cursor: TopicWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default TopicAggregateArgsSchema;
