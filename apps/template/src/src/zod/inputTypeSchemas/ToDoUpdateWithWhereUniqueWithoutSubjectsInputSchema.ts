import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema';
import { ToDoUpdateWithoutSubjectsInputSchema } from './ToDoUpdateWithoutSubjectsInputSchema';
import { ToDoUncheckedUpdateWithoutSubjectsInputSchema } from './ToDoUncheckedUpdateWithoutSubjectsInputSchema';

export const ToDoUpdateWithWhereUniqueWithoutSubjectsInputSchema: z.ZodType<Prisma.ToDoUpdateWithWhereUniqueWithoutSubjectsInput> = z.object({
  where: z.lazy(() => ToDoWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ToDoUpdateWithoutSubjectsInputSchema),z.lazy(() => ToDoUncheckedUpdateWithoutSubjectsInputSchema) ]),
}).strict();

export default ToDoUpdateWithWhereUniqueWithoutSubjectsInputSchema;
