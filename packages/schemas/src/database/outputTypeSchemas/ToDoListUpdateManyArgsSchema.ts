import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { ToDoListUpdateManyMutationInputSchema } from '../inputTypeSchemas/ToDoListUpdateManyMutationInputSchema.js'
import { ToDoListUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ToDoListUncheckedUpdateManyInputSchema.js'
import { ToDoListWhereInputSchema } from '../inputTypeSchemas/ToDoListWhereInputSchema.js'
export const ToDoListUpdateManyArgsSchema: z.ZodType<Prisma.ToDoListUpdateManyArgs> = z.object({
  data: z.union([ ToDoListUpdateManyMutationInputSchema,ToDoListUncheckedUpdateManyInputSchema ]),
  where: ToDoListWhereInputSchema.optional(),
}).strict() ;
export default ToDoListUpdateManyArgsSchema;