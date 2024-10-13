import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/DailyFocusWhereInputSchema.js
..//inputTypeSchemas/DailyFocusOrderByWithRelationInputSchema.js
..//inputTypeSchemas/DailyFocusWhereUniqueInputSchema.js
export const DailyFocusAggregateArgsSchema: z.ZodType<Prisma.DailyFocusAggregateArgs> = z.object({
  where: DailyFocusWhereInputSchema.optional(),
  orderBy: z.union([ DailyFocusOrderByWithRelationInputSchema.array(),DailyFocusOrderByWithRelationInputSchema ]).optional(),
  cursor: DailyFocusWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default DailyFocusAggregateArgsSchema;