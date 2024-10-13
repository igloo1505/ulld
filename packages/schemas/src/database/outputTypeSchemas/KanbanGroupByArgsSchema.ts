import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/KanbanWhereInputSchema.js
..//inputTypeSchemas/KanbanOrderByWithAggregationInputSchema.js
..//inputTypeSchemas/KanbanScalarFieldEnumSchema.js
..//inputTypeSchemas/KanbanScalarWhereWithAggregatesInputSchema.js
export const KanbanGroupByArgsSchema: z.ZodType<Prisma.KanbanGroupByArgs> = z.object({
  where: KanbanWhereInputSchema.optional(),
  orderBy: z.union([ KanbanOrderByWithAggregationInputSchema.array(),KanbanOrderByWithAggregationInputSchema ]).optional(),
  by: KanbanScalarFieldEnumSchema.array(),
  having: KanbanScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default KanbanGroupByArgsSchema;