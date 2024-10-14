import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema.js';
import { ToDoUpdateWithoutSubjectsInputSchema } from './ToDoUpdateWithoutSubjectsInputSchema.js';
import { ToDoUncheckedUpdateWithoutSubjectsInputSchema } from './ToDoUncheckedUpdateWithoutSubjectsInputSchema.js';
import { ToDoCreateWithoutSubjectsInputSchema } from './ToDoCreateWithoutSubjectsInputSchema.js';
import { ToDoUncheckedCreateWithoutSubjectsInputSchema } from './ToDoUncheckedCreateWithoutSubjectsInputSchema.js';
export const ToDoUpsertWithWhereUniqueWithoutSubjectsInputSchema: z.ZodType<Prisma.ToDoUpsertWithWhereUniqueWithoutSubjectsInput> = z.object({
  where: z.lazy(() => ToDoWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ToDoUpdateWithoutSubjectsInputSchema),z.lazy(() => ToDoUncheckedUpdateWithoutSubjectsInputSchema) ]),
  create: z.union([ z.lazy(() => ToDoCreateWithoutSubjectsInputSchema),z.lazy(() => ToDoUncheckedCreateWithoutSubjectsInputSchema) ]),
}).strict();
export default ToDoUpsertWithWhereUniqueWithoutSubjectsInputSchema;