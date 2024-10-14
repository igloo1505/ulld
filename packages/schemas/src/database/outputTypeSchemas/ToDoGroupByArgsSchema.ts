import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ToDoWhereInputSchema } from '../inputTypeSchemas/ToDoWhereInputSchema'
import { ToDoOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ToDoOrderByWithAggregationInputSchema'
import { ToDoScalarFieldEnumSchema } from '../inputTypeSchemas/ToDoScalarFieldEnumSchema'
import { ToDoScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ToDoScalarWhereWithAggregatesInputSchema'

export const ToDoGroupByArgsSchema: z.ZodType<Prisma.ToDoGroupByArgs> = z.object({
  where: ToDoWhereInputSchema.optional(),
  orderBy: z.union([ ToDoOrderByWithAggregationInputSchema.array(),ToDoOrderByWithAggregationInputSchema ]).optional(),
  by: ToDoScalarFieldEnumSchema.array(),
  having: ToDoScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ToDoGroupByArgsSchema;
