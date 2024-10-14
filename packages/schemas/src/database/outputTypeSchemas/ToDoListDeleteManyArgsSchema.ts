import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { ToDoListWhereInputSchema } from '../inputTypeSchemas/ToDoListWhereInputSchema.js'
export const ToDoListDeleteManyArgsSchema: z.ZodType<Prisma.ToDoListDeleteManyArgs> = z.object({
  where: ToDoListWhereInputSchema.optional(),
}).strict() ;
export default ToDoListDeleteManyArgsSchema;