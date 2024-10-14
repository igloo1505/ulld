import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoListScalarWhereInputSchema } from './ToDoListScalarWhereInputSchema.js';
import { ToDoListUpdateManyMutationInputSchema } from './ToDoListUpdateManyMutationInputSchema.js';
import { ToDoListUncheckedUpdateManyWithoutSubjectsInputSchema } from './ToDoListUncheckedUpdateManyWithoutSubjectsInputSchema.js';
export const ToDoListUpdateManyWithWhereWithoutSubjectsInputSchema: z.ZodType<Prisma.ToDoListUpdateManyWithWhereWithoutSubjectsInput> = z.object({
  where: z.lazy(() => ToDoListScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ToDoListUpdateManyMutationInputSchema),z.lazy(() => ToDoListUncheckedUpdateManyWithoutSubjectsInputSchema) ]),
}).strict();
export default ToDoListUpdateManyWithWhereWithoutSubjectsInputSchema;