import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/ToDoUpdateManyMutationInputSchema.js
..//inputTypeSchemas/ToDoUncheckedUpdateManyInputSchema.js
..//inputTypeSchemas/ToDoWhereInputSchema.js
export const ToDoUpdateManyArgsSchema: z.ZodType<Prisma.ToDoUpdateManyArgs> = z.object({
  data: z.union([ ToDoUpdateManyMutationInputSchema,ToDoUncheckedUpdateManyInputSchema ]),
  where: ToDoWhereInputSchema.optional(),
}).strict() ;
export default ToDoUpdateManyArgsSchema;