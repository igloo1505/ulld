import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { ToDoWhereInputSchema } from '../inputTypeSchemas/ToDoWhereInputSchema.js'
export const ToDoDeleteManyArgsSchema: z.ZodType<Prisma.ToDoDeleteManyArgs> = z.object({
  where: ToDoWhereInputSchema.optional(),
}).strict() ;
export default ToDoDeleteManyArgsSchema;