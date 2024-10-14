import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ToDoWhereInputSchema } from '../inputTypeSchemas/ToDoWhereInputSchema'
import { ToDoOrderByWithRelationInputSchema } from '../inputTypeSchemas/ToDoOrderByWithRelationInputSchema'
import { ToDoWhereUniqueInputSchema } from '../inputTypeSchemas/ToDoWhereUniqueInputSchema'

export const ToDoAggregateArgsSchema: z.ZodType<Prisma.ToDoAggregateArgs> = z.object({
  where: ToDoWhereInputSchema.optional(),
  orderBy: z.union([ ToDoOrderByWithRelationInputSchema.array(),ToDoOrderByWithRelationInputSchema ]).optional(),
  cursor: ToDoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ToDoAggregateArgsSchema;
