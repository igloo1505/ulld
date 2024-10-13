import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/CitationsGroupWhereInputSchema.js
..//inputTypeSchemas/CitationsGroupOrderByWithAggregationInputSchema.js
..//inputTypeSchemas/CitationsGroupScalarFieldEnumSchema.js
..//inputTypeSchemas/CitationsGroupScalarWhereWithAggregatesInputSchema.js
export const CitationsGroupGroupByArgsSchema: z.ZodType<Prisma.CitationsGroupGroupByArgs> = z.object({
  where: CitationsGroupWhereInputSchema.optional(),
  orderBy: z.union([ CitationsGroupOrderByWithAggregationInputSchema.array(),CitationsGroupOrderByWithAggregationInputSchema ]).optional(),
  by: CitationsGroupScalarFieldEnumSchema.array(),
  having: CitationsGroupScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default CitationsGroupGroupByArgsSchema;