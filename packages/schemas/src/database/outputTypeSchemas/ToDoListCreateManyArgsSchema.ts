import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ToDoListCreateManyInputSchema } from '../inputTypeSchemas/ToDoListCreateManyInputSchema'

export const ToDoListCreateManyArgsSchema: z.ZodType<Prisma.ToDoListCreateManyArgs> = z.object({
  data: z.union([ ToDoListCreateManyInputSchema,ToDoListCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default ToDoListCreateManyArgsSchema;
