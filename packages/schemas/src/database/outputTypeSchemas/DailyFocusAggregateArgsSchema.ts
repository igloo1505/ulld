import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DailyFocusWhereInputSchema } from '../inputTypeSchemas/DailyFocusWhereInputSchema'
import { DailyFocusOrderByWithRelationInputSchema } from '../inputTypeSchemas/DailyFocusOrderByWithRelationInputSchema'
import { DailyFocusWhereUniqueInputSchema } from '../inputTypeSchemas/DailyFocusWhereUniqueInputSchema'

export const DailyFocusAggregateArgsSchema: z.ZodType<Prisma.DailyFocusAggregateArgs> = z.object({
  where: DailyFocusWhereInputSchema.optional(),
  orderBy: z.union([ DailyFocusOrderByWithRelationInputSchema.array(),DailyFocusOrderByWithRelationInputSchema ]).optional(),
  cursor: DailyFocusWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default DailyFocusAggregateArgsSchema;
