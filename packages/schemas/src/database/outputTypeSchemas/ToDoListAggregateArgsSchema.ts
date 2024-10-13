import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/ToDoListWhereInputSchema.js
..//inputTypeSchemas/ToDoListOrderByWithRelationInputSchema.js
..//inputTypeSchemas/ToDoListWhereUniqueInputSchema.js
export const ToDoListAggregateArgsSchema: z.ZodType<Prisma.ToDoListAggregateArgs> = z.object({
  where: ToDoListWhereInputSchema.optional(),
  orderBy: z.union([ ToDoListOrderByWithRelationInputSchema.array(),ToDoListOrderByWithRelationInputSchema ]).optional(),
  cursor: ToDoListWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default ToDoListAggregateArgsSchema;