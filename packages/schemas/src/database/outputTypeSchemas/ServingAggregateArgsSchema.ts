import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServingWhereInputSchema } from '../inputTypeSchemas/ServingWhereInputSchema'
import { ServingOrderByWithRelationInputSchema } from '../inputTypeSchemas/ServingOrderByWithRelationInputSchema'
import { ServingWhereUniqueInputSchema } from '../inputTypeSchemas/ServingWhereUniqueInputSchema'

export const ServingAggregateArgsSchema: z.ZodType<Prisma.ServingAggregateArgs> = z.object({
  where: ServingWhereInputSchema.optional(),
  orderBy: z.union([ ServingOrderByWithRelationInputSchema.array(),ServingOrderByWithRelationInputSchema ]).optional(),
  cursor: ServingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ServingAggregateArgsSchema;
