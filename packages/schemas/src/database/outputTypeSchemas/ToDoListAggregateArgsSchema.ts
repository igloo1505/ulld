import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ToDoListWhereInputSchema } from '../inputTypeSchemas/ToDoListWhereInputSchema'
import { ToDoListOrderByWithRelationInputSchema } from '../inputTypeSchemas/ToDoListOrderByWithRelationInputSchema'
import { ToDoListWhereUniqueInputSchema } from '../inputTypeSchemas/ToDoListWhereUniqueInputSchema'

export const ToDoListAggregateArgsSchema: z.ZodType<Prisma.ToDoListAggregateArgs> = z.object({
  where: ToDoListWhereInputSchema.optional(),
  orderBy: z.union([ ToDoListOrderByWithRelationInputSchema.array(),ToDoListOrderByWithRelationInputSchema ]).optional(),
  cursor: ToDoListWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ToDoListAggregateArgsSchema;
