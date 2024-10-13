import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/ToDoListWhereInputSchema.js
..//inputTypeSchemas/ToDoListOrderByWithAggregationInputSchema.js
..//inputTypeSchemas/ToDoListScalarFieldEnumSchema.js
..//inputTypeSchemas/ToDoListScalarWhereWithAggregatesInputSchema.js
export const ToDoListGroupByArgsSchema: z.ZodType<Prisma.ToDoListGroupByArgs> = z.object({
  where: ToDoListWhereInputSchema.optional(),
  orderBy: z.union([ ToDoListOrderByWithAggregationInputSchema.array(),ToDoListOrderByWithAggregationInputSchema ]).optional(),
  by: ToDoListScalarFieldEnumSchema.array(),
  having: ToDoListScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default ToDoListGroupByArgsSchema;