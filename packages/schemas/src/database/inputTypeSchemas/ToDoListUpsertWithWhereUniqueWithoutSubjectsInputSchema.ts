import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoListWhereUniqueInputSchema } from './ToDoListWhereUniqueInputSchema';
import { ToDoListUpdateWithoutSubjectsInputSchema } from './ToDoListUpdateWithoutSubjectsInputSchema';
import { ToDoListUncheckedUpdateWithoutSubjectsInputSchema } from './ToDoListUncheckedUpdateWithoutSubjectsInputSchema';
import { ToDoListCreateWithoutSubjectsInputSchema } from './ToDoListCreateWithoutSubjectsInputSchema';
import { ToDoListUncheckedCreateWithoutSubjectsInputSchema } from './ToDoListUncheckedCreateWithoutSubjectsInputSchema';

export const ToDoListUpsertWithWhereUniqueWithoutSubjectsInputSchema: z.ZodType<Prisma.ToDoListUpsertWithWhereUniqueWithoutSubjectsInput> = z.object({
  where: z.lazy(() => ToDoListWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ToDoListUpdateWithoutSubjectsInputSchema),z.lazy(() => ToDoListUncheckedUpdateWithoutSubjectsInputSchema) ]),
  create: z.union([ z.lazy(() => ToDoListCreateWithoutSubjectsInputSchema),z.lazy(() => ToDoListUncheckedCreateWithoutSubjectsInputSchema) ]),
}).strict();

export default ToDoListUpsertWithWhereUniqueWithoutSubjectsInputSchema;
