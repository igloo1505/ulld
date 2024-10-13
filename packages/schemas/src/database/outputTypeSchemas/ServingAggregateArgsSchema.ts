import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/ServingWhereInputSchema.js
..//inputTypeSchemas/ServingOrderByWithRelationInputSchema.js
..//inputTypeSchemas/ServingWhereUniqueInputSchema.js
export const ServingAggregateArgsSchema: z.ZodType<Prisma.ServingAggregateArgs> = z.object({
  where: ServingWhereInputSchema.optional(),
  orderBy: z.union([ ServingOrderByWithRelationInputSchema.array(),ServingOrderByWithRelationInputSchema ]).optional(),
  cursor: ServingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default ServingAggregateArgsSchema;