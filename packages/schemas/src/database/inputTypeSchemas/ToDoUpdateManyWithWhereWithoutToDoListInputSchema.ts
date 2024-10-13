import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoScalarWhereInputSchema } from '../ToDoScalarWhereInputSchema.js';
import { ToDoUpdateManyMutationInputSchema } from '../ToDoUpdateManyMutationInputSchema.js';
import { ToDoUncheckedUpdateManyWithoutToDoListInputSchema } from '../ToDoUncheckedUpdateManyWithoutToDoListInputSchema.js';
export const ToDoUpdateManyWithWhereWithoutToDoListInputSchema: z.ZodType<Prisma.ToDoUpdateManyWithWhereWithoutToDoListInput> = z.object({
  where: z.lazy(() => ToDoScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ToDoUpdateManyMutationInputSchema),z.lazy(() => ToDoUncheckedUpdateManyWithoutToDoListInputSchema) ]),
}).strict();
export default ToDoUpdateManyWithWhereWithoutToDoListInputSchema;