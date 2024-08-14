import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CitationsGroupWhereInputSchema } from '../inputTypeSchemas/CitationsGroupWhereInputSchema'
import { CitationsGroupOrderByWithRelationInputSchema } from '../inputTypeSchemas/CitationsGroupOrderByWithRelationInputSchema'
import { CitationsGroupWhereUniqueInputSchema } from '../inputTypeSchemas/CitationsGroupWhereUniqueInputSchema'

export const CitationsGroupAggregateArgsSchema: z.ZodType<Prisma.CitationsGroupAggregateArgs> = z.object({
  where: CitationsGroupWhereInputSchema.optional(),
  orderBy: z.union([ CitationsGroupOrderByWithRelationInputSchema.array(),CitationsGroupOrderByWithRelationInputSchema ]).optional(),
  cursor: CitationsGroupWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default CitationsGroupAggregateArgsSchema;
