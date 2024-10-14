import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoListWhereUniqueInputSchema } from './ToDoListWhereUniqueInputSchema';
import { ToDoListUpdateWithoutSubjectsInputSchema } from './ToDoListUpdateWithoutSubjectsInputSchema';
import { ToDoListUncheckedUpdateWithoutSubjectsInputSchema } from './ToDoListUncheckedUpdateWithoutSubjectsInputSchema';

export const ToDoListUpdateWithWhereUniqueWithoutSubjectsInputSchema: z.ZodType<Prisma.ToDoListUpdateWithWhereUniqueWithoutSubjectsInput> = z.object({
  where: z.lazy(() => ToDoListWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ToDoListUpdateWithoutSubjectsInputSchema),z.lazy(() => ToDoListUncheckedUpdateWithoutSubjectsInputSchema) ]),
}).strict();

export default ToDoListUpdateWithWhereUniqueWithoutSubjectsInputSchema;
