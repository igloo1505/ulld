import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema';
import { ToDoUpdateWithoutToDoListInputSchema } from './ToDoUpdateWithoutToDoListInputSchema';
import { ToDoUncheckedUpdateWithoutToDoListInputSchema } from './ToDoUncheckedUpdateWithoutToDoListInputSchema';
import { ToDoCreateWithoutToDoListInputSchema } from './ToDoCreateWithoutToDoListInputSchema';
import { ToDoUncheckedCreateWithoutToDoListInputSchema } from './ToDoUncheckedCreateWithoutToDoListInputSchema';

export const ToDoUpsertWithWhereUniqueWithoutToDoListInputSchema: z.ZodType<Prisma.ToDoUpsertWithWhereUniqueWithoutToDoListInput> = z.object({
  where: z.lazy(() => ToDoWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ToDoUpdateWithoutToDoListInputSchema),z.lazy(() => ToDoUncheckedUpdateWithoutToDoListInputSchema) ]),
  create: z.union([ z.lazy(() => ToDoCreateWithoutToDoListInputSchema),z.lazy(() => ToDoUncheckedCreateWithoutToDoListInputSchema) ]),
}).strict();

export default ToDoUpsertWithWhereUniqueWithoutToDoListInputSchema;
