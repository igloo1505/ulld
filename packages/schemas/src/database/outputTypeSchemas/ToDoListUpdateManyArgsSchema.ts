import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ToDoListUpdateManyMutationInputSchema } from '../inputTypeSchemas/ToDoListUpdateManyMutationInputSchema'
import { ToDoListUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ToDoListUncheckedUpdateManyInputSchema'
import { ToDoListWhereInputSchema } from '../inputTypeSchemas/ToDoListWhereInputSchema'

export const ToDoListUpdateManyArgsSchema: z.ZodType<Prisma.ToDoListUpdateManyArgs> = z.object({
  data: z.union([ ToDoListUpdateManyMutationInputSchema,ToDoListUncheckedUpdateManyInputSchema ]),
  where: ToDoListWhereInputSchema.optional(),
}).strict() ;

export default ToDoListUpdateManyArgsSchema;
