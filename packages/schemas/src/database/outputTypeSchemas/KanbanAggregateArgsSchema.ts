import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/KanbanWhereInputSchema.js
..//inputTypeSchemas/KanbanOrderByWithRelationInputSchema.js
..//inputTypeSchemas/KanbanWhereUniqueInputSchema.js
export const KanbanAggregateArgsSchema: z.ZodType<Prisma.KanbanAggregateArgs> = z.object({
  where: KanbanWhereInputSchema.optional(),
  orderBy: z.union([ KanbanOrderByWithRelationInputSchema.array(),KanbanOrderByWithRelationInputSchema ]).optional(),
  cursor: KanbanWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default KanbanAggregateArgsSchema;