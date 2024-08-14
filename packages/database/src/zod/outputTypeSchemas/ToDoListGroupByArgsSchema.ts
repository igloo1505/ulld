import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ToDoListWhereInputSchema } from '../inputTypeSchemas/ToDoListWhereInputSchema'
import { ToDoListOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ToDoListOrderByWithAggregationInputSchema'
import { ToDoListScalarFieldEnumSchema } from '../inputTypeSchemas/ToDoListScalarFieldEnumSchema'
import { ToDoListScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ToDoListScalarWhereWithAggregatesInputSchema'

export const ToDoListGroupByArgsSchema: z.ZodType<Prisma.ToDoListGroupByArgs> = z.object({
  where: ToDoListWhereInputSchema.optional(),
  orderBy: z.union([ ToDoListOrderByWithAggregationInputSchema.array(),ToDoListOrderByWithAggregationInputSchema ]).optional(),
  by: ToDoListScalarFieldEnumSchema.array(),
  having: ToDoListScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ToDoListGroupByArgsSchema;
