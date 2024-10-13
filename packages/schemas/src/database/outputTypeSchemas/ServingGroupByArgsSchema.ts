import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/ServingWhereInputSchema.js
..//inputTypeSchemas/ServingOrderByWithAggregationInputSchema.js
..//inputTypeSchemas/ServingScalarFieldEnumSchema.js
..//inputTypeSchemas/ServingScalarWhereWithAggregatesInputSchema.js
export const ServingGroupByArgsSchema: z.ZodType<Prisma.ServingGroupByArgs> = z.object({
  where: ServingWhereInputSchema.optional(),
  orderBy: z.union([ ServingOrderByWithAggregationInputSchema.array(),ServingOrderByWithAggregationInputSchema ]).optional(),
  by: ServingScalarFieldEnumSchema.array(),
  having: ServingScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default ServingGroupByArgsSchema;