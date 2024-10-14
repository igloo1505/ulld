import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema.js';
import { ToDoUpdateWithoutSubjectsInputSchema } from './ToDoUpdateWithoutSubjectsInputSchema.js';
import { ToDoUncheckedUpdateWithoutSubjectsInputSchema } from './ToDoUncheckedUpdateWithoutSubjectsInputSchema.js';
export const ToDoUpdateWithWhereUniqueWithoutSubjectsInputSchema: z.ZodType<Prisma.ToDoUpdateWithWhereUniqueWithoutSubjectsInput> = z.object({
  where: z.lazy(() => ToDoWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ToDoUpdateWithoutSubjectsInputSchema),z.lazy(() => ToDoUncheckedUpdateWithoutSubjectsInputSchema) ]),
}).strict();
export default ToDoUpdateWithWhereUniqueWithoutSubjectsInputSchema;