import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/DietaryItemWhereInputSchema.js
..//inputTypeSchemas/DietaryItemOrderByWithAggregationInputSchema.js
..//inputTypeSchemas/DietaryItemScalarFieldEnumSchema.js
..//inputTypeSchemas/DietaryItemScalarWhereWithAggregatesInputSchema.js
export const DietaryItemGroupByArgsSchema: z.ZodType<Prisma.DietaryItemGroupByArgs> = z.object({
  where: DietaryItemWhereInputSchema.optional(),
  orderBy: z.union([ DietaryItemOrderByWithAggregationInputSchema.array(),DietaryItemOrderByWithAggregationInputSchema ]).optional(),
  by: DietaryItemScalarFieldEnumSchema.array(),
  having: DietaryItemScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default DietaryItemGroupByArgsSchema;