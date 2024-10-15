import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { ToDoListWhereInputSchema } from '../inputTypeSchemas/ToDoListWhereInputSchema.js'
import { ToDoListOrderByWithRelationInputSchema } from '../inputTypeSchemas/ToDoListOrderByWithRelationInputSchema.js'
import { ToDoListWhereUniqueInputSchema } from '../inputTypeSchemas/ToDoListWhereUniqueInputSchema.js'
export const ToDoListAggregateArgsSchema: z.ZodType<Prisma.ToDoListAggregateArgs> = z.object({
  where: ToDoListWhereInputSchema.optional(),
  orderBy: z.union([ ToDoListOrderByWithRelationInputSchema.array(),ToDoListOrderByWithRelationInputSchema ]).optional(),
  cursor: ToDoListWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default ToDoListAggregateArgsSchema;