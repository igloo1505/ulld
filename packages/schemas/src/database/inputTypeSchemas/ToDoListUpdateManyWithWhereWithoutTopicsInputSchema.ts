import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoListScalarWhereInputSchema } from './ToDoListScalarWhereInputSchema.js';
import { ToDoListUpdateManyMutationInputSchema } from './ToDoListUpdateManyMutationInputSchema.js';
import { ToDoListUncheckedUpdateManyWithoutTopicsInputSchema } from './ToDoListUncheckedUpdateManyWithoutTopicsInputSchema.js';
export const ToDoListUpdateManyWithWhereWithoutTopicsInputSchema: z.ZodType<Prisma.ToDoListUpdateManyWithWhereWithoutTopicsInput> = z.object({
  where: z.lazy(() => ToDoListScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ToDoListUpdateManyMutationInputSchema),z.lazy(() => ToDoListUncheckedUpdateManyWithoutTopicsInputSchema) ]),
}).strict();
export default ToDoListUpdateManyWithWhereWithoutTopicsInputSchema;