import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { ToDoListCreateManyInputSchema } from '../inputTypeSchemas/ToDoListCreateManyInputSchema.js'
export const ToDoListCreateManyArgsSchema: z.ZodType<Prisma.ToDoListCreateManyArgs> = z.object({
  data: z.union([ ToDoListCreateManyInputSchema,ToDoListCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default ToDoListCreateManyArgsSchema;