import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoScalarWhereInputSchema } from '../ToDoScalarWhereInputSchema.js';
import { ToDoUpdateManyMutationInputSchema } from '../ToDoUpdateManyMutationInputSchema.js';
import { ToDoUncheckedUpdateManyWithoutSubjectsInputSchema } from '../ToDoUncheckedUpdateManyWithoutSubjectsInputSchema.js';
export const ToDoUpdateManyWithWhereWithoutSubjectsInputSchema: z.ZodType<Prisma.ToDoUpdateManyWithWhereWithoutSubjectsInput> = z.object({
  where: z.lazy(() => ToDoScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ToDoUpdateManyMutationInputSchema),z.lazy(() => ToDoUncheckedUpdateManyWithoutSubjectsInputSchema) ]),
}).strict();
export default ToDoUpdateManyWithWhereWithoutSubjectsInputSchema;