import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/DJTWhereInputSchema.js
..//inputTypeSchemas/DJTOrderByWithAggregationInputSchema.js
..//inputTypeSchemas/DJTScalarFieldEnumSchema.js
..//inputTypeSchemas/DJTScalarWhereWithAggregatesInputSchema.js
export const DJTGroupByArgsSchema: z.ZodType<Prisma.DJTGroupByArgs> = z.object({
  where: DJTWhereInputSchema.optional(),
  orderBy: z.union([ DJTOrderByWithAggregationInputSchema.array(),DJTOrderByWithAggregationInputSchema ]).optional(),
  by: DJTScalarFieldEnumSchema.array(),
  having: DJTScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default DJTGroupByArgsSchema;