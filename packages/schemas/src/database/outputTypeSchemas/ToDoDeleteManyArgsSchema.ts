import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ToDoWhereInputSchema } from '../inputTypeSchemas/ToDoWhereInputSchema'

export const ToDoDeleteManyArgsSchema: z.ZodType<Prisma.ToDoDeleteManyArgs> = z.object({
  where: ToDoWhereInputSchema.optional(),
}).strict() ;

export default ToDoDeleteManyArgsSchema;
