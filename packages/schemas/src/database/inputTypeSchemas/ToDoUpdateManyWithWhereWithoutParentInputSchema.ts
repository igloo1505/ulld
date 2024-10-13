import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoScalarWhereInputSchema } from '../ToDoScalarWhereInputSchema.js';
import { ToDoUpdateManyMutationInputSchema } from '../ToDoUpdateManyMutationInputSchema.js';
import { ToDoUncheckedUpdateManyWithoutParentInputSchema } from '../ToDoUncheckedUpdateManyWithoutParentInputSchema.js';
export const ToDoUpdateManyWithWhereWithoutParentInputSchema: z.ZodType<Prisma.ToDoUpdateManyWithWhereWithoutParentInput> = z.object({
  where: z.lazy(() => ToDoScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ToDoUpdateManyMutationInputSchema),z.lazy(() => ToDoUncheckedUpdateManyWithoutParentInputSchema) ]),
}).strict();
export default ToDoUpdateManyWithWhereWithoutParentInputSchema;