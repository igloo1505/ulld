import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/DietWhereInputSchema.js
..//inputTypeSchemas/DietOrderByWithRelationInputSchema.js
..//inputTypeSchemas/DietWhereUniqueInputSchema.js
export const DietAggregateArgsSchema: z.ZodType<Prisma.DietAggregateArgs> = z.object({
  where: DietWhereInputSchema.optional(),
  orderBy: z.union([ DietOrderByWithRelationInputSchema.array(),DietOrderByWithRelationInputSchema ]).optional(),
  cursor: DietWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default DietAggregateArgsSchema;