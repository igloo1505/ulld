import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReadingListWhereInputSchema } from '../inputTypeSchemas/ReadingListWhereInputSchema'
import { ReadingListOrderByWithRelationInputSchema } from '../inputTypeSchemas/ReadingListOrderByWithRelationInputSchema'
import { ReadingListWhereUniqueInputSchema } from '../inputTypeSchemas/ReadingListWhereUniqueInputSchema'

export const ReadingListAggregateArgsSchema: z.ZodType<Prisma.ReadingListAggregateArgs> = z.object({
  where: ReadingListWhereInputSchema.optional(),
  orderBy: z.union([ ReadingListOrderByWithRelationInputSchema.array(),ReadingListOrderByWithRelationInputSchema ]).optional(),
  cursor: ReadingListWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ReadingListAggregateArgsSchema;
