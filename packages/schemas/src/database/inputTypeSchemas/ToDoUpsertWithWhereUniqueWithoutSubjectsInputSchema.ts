import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema';
import { ToDoUpdateWithoutSubjectsInputSchema } from './ToDoUpdateWithoutSubjectsInputSchema';
import { ToDoUncheckedUpdateWithoutSubjectsInputSchema } from './ToDoUncheckedUpdateWithoutSubjectsInputSchema';
import { ToDoCreateWithoutSubjectsInputSchema } from './ToDoCreateWithoutSubjectsInputSchema';
import { ToDoUncheckedCreateWithoutSubjectsInputSchema } from './ToDoUncheckedCreateWithoutSubjectsInputSchema';

export const ToDoUpsertWithWhereUniqueWithoutSubjectsInputSchema: z.ZodType<Prisma.ToDoUpsertWithWhereUniqueWithoutSubjectsInput> = z.object({
  where: z.lazy(() => ToDoWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ToDoUpdateWithoutSubjectsInputSchema),z.lazy(() => ToDoUncheckedUpdateWithoutSubjectsInputSchema) ]),
  create: z.union([ z.lazy(() => ToDoCreateWithoutSubjectsInputSchema),z.lazy(() => ToDoUncheckedCreateWithoutSubjectsInputSchema) ]),
}).strict();

export default ToDoUpsertWithWhereUniqueWithoutSubjectsInputSchema;
