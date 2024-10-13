import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/DietWhereInputSchema.js
..//inputTypeSchemas/DietOrderByWithAggregationInputSchema.js
..//inputTypeSchemas/DietScalarFieldEnumSchema.js
..//inputTypeSchemas/DietScalarWhereWithAggregatesInputSchema.js
export const DietGroupByArgsSchema: z.ZodType<Prisma.DietGroupByArgs> = z.object({
  where: DietWhereInputSchema.optional(),
  orderBy: z.union([ DietOrderByWithAggregationInputSchema.array(),DietOrderByWithAggregationInputSchema ]).optional(),
  by: DietScalarFieldEnumSchema.array(),
  having: DietScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default DietGroupByArgsSchema;