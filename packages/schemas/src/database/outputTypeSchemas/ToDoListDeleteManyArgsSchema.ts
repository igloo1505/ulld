import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ToDoListWhereInputSchema } from '../inputTypeSchemas/ToDoListWhereInputSchema'

export const ToDoListDeleteManyArgsSchema: z.ZodType<Prisma.ToDoListDeleteManyArgs> = z.object({
  where: ToDoListWhereInputSchema.optional(),
}).strict() ;

export default ToDoListDeleteManyArgsSchema;
