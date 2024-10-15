import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { ServingWhereInputSchema } from '../inputTypeSchemas/ServingWhereInputSchema.js'
import { ServingOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ServingOrderByWithAggregationInputSchema.js'
import { ServingScalarFieldEnumSchema } from '../inputTypeSchemas/ServingScalarFieldEnumSchema.js'
import { ServingScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ServingScalarWhereWithAggregatesInputSchema.js'
export const ServingGroupByArgsSchema: z.ZodType<Prisma.ServingGroupByArgs> = z.object({
  where: ServingWhereInputSchema.optional(),
  orderBy: z.union([ ServingOrderByWithAggregationInputSchema.array(),ServingOrderByWithAggregationInputSchema ]).optional(),
  by: ServingScalarFieldEnumSchema.array(),
  having: ServingScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default ServingGroupByArgsSchema;