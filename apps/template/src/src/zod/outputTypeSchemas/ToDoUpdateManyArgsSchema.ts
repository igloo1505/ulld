import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ToDoUpdateManyMutationInputSchema } from '../inputTypeSchemas/ToDoUpdateManyMutationInputSchema'
import { ToDoUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ToDoUncheckedUpdateManyInputSchema'
import { ToDoWhereInputSchema } from '../inputTypeSchemas/ToDoWhereInputSchema'

export const ToDoUpdateManyArgsSchema: z.ZodType<Prisma.ToDoUpdateManyArgs> = z.object({
  data: z.union([ ToDoUpdateManyMutationInputSchema,ToDoUncheckedUpdateManyInputSchema ]),
  where: ToDoWhereInputSchema.optional(),
}).strict() ;

export default ToDoUpdateManyArgsSchema;
