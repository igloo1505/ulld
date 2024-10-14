import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { ToDoCreateManyInputSchema } from '../inputTypeSchemas/ToDoCreateManyInputSchema.js'
export const ToDoCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ToDoCreateManyAndReturnArgs> = z.object({
  data: z.union([ ToDoCreateManyInputSchema,ToDoCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default ToDoCreateManyAndReturnArgsSchema;