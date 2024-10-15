import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoScalarWhereInputSchema } from './ToDoScalarWhereInputSchema.js';
import { ToDoUpdateManyMutationInputSchema } from './ToDoUpdateManyMutationInputSchema.js';
import { ToDoUncheckedUpdateManyWithoutTopicsInputSchema } from './ToDoUncheckedUpdateManyWithoutTopicsInputSchema.js';
export const ToDoUpdateManyWithWhereWithoutTopicsInputSchema: z.ZodType<Prisma.ToDoUpdateManyWithWhereWithoutTopicsInput> = z.object({
  where: z.lazy(() => ToDoScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ToDoUpdateManyMutationInputSchema),z.lazy(() => ToDoUncheckedUpdateManyWithoutTopicsInputSchema) ]),
}).strict();
export default ToDoUpdateManyWithWhereWithoutTopicsInputSchema;