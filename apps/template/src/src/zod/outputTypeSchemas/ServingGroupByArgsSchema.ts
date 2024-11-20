import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServingWhereInputSchema } from '../inputTypeSchemas/ServingWhereInputSchema'
import { ServingOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ServingOrderByWithAggregationInputSchema'
import { ServingScalarFieldEnumSchema } from '../inputTypeSchemas/ServingScalarFieldEnumSchema'
import { ServingScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ServingScalarWhereWithAggregatesInputSchema'

export const ServingGroupByArgsSchema: z.ZodType<Prisma.ServingGroupByArgs> = z.object({
  where: ServingWhereInputSchema.optional(),
  orderBy: z.union([ ServingOrderByWithAggregationInputSchema.array(),ServingOrderByWithAggregationInputSchema ]).optional(),
  by: ServingScalarFieldEnumSchema.array(),
  having: ServingScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ServingGroupByArgsSchema;
