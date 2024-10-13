import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/DailyFocusWhereInputSchema.js
..//inputTypeSchemas/DailyFocusOrderByWithAggregationInputSchema.js
..//inputTypeSchemas/DailyFocusScalarFieldEnumSchema.js
..//inputTypeSchemas/DailyFocusScalarWhereWithAggregatesInputSchema.js
export const DailyFocusGroupByArgsSchema: z.ZodType<Prisma.DailyFocusGroupByArgs> = z.object({
  where: DailyFocusWhereInputSchema.optional(),
  orderBy: z.union([ DailyFocusOrderByWithAggregationInputSchema.array(),DailyFocusOrderByWithAggregationInputSchema ]).optional(),
  by: DailyFocusScalarFieldEnumSchema.array(),
  having: DailyFocusScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default DailyFocusGroupByArgsSchema;