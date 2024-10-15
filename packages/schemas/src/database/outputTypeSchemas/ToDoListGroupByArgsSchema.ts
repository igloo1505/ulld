import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { ToDoListWhereInputSchema } from '../inputTypeSchemas/ToDoListWhereInputSchema.js'
import { ToDoListOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ToDoListOrderByWithAggregationInputSchema.js'
import { ToDoListScalarFieldEnumSchema } from '../inputTypeSchemas/ToDoListScalarFieldEnumSchema.js'
import { ToDoListScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ToDoListScalarWhereWithAggregatesInputSchema.js'
export const ToDoListGroupByArgsSchema: z.ZodType<Prisma.ToDoListGroupByArgs> = z.object({
  where: ToDoListWhereInputSchema.optional(),
  orderBy: z.union([ ToDoListOrderByWithAggregationInputSchema.array(),ToDoListOrderByWithAggregationInputSchema ]).optional(),
  by: ToDoListScalarFieldEnumSchema.array(),
  having: ToDoListScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default ToDoListGroupByArgsSchema;