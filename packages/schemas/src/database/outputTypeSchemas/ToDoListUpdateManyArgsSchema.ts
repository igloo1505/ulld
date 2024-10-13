import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/ToDoListUpdateManyMutationInputSchema.js
..//inputTypeSchemas/ToDoListUncheckedUpdateManyInputSchema.js
..//inputTypeSchemas/ToDoListWhereInputSchema.js
export const ToDoListUpdateManyArgsSchema: z.ZodType<Prisma.ToDoListUpdateManyArgs> = z.object({
  data: z.union([ ToDoListUpdateManyMutationInputSchema,ToDoListUncheckedUpdateManyInputSchema ]),
  where: ToDoListWhereInputSchema.optional(),
}).strict() ;
export default ToDoListUpdateManyArgsSchema;