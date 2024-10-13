import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/ToDoWhereInputSchema.js
..//inputTypeSchemas/ToDoOrderByWithRelationInputSchema.js
..//inputTypeSchemas/ToDoWhereUniqueInputSchema.js
export const ToDoAggregateArgsSchema: z.ZodType<Prisma.ToDoAggregateArgs> = z.object({
  where: ToDoWhereInputSchema.optional(),
  orderBy: z.union([ ToDoOrderByWithRelationInputSchema.array(),ToDoOrderByWithRelationInputSchema ]).optional(),
  cursor: ToDoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default ToDoAggregateArgsSchema;