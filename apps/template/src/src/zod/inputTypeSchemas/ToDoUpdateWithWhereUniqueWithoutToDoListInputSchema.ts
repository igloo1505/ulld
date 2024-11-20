import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema';
import { ToDoUpdateWithoutToDoListInputSchema } from './ToDoUpdateWithoutToDoListInputSchema';
import { ToDoUncheckedUpdateWithoutToDoListInputSchema } from './ToDoUncheckedUpdateWithoutToDoListInputSchema';

export const ToDoUpdateWithWhereUniqueWithoutToDoListInputSchema: z.ZodType<Prisma.ToDoUpdateWithWhereUniqueWithoutToDoListInput> = z.object({
  where: z.lazy(() => ToDoWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ToDoUpdateWithoutToDoListInputSchema),z.lazy(() => ToDoUncheckedUpdateWithoutToDoListInputSchema) ]),
}).strict();

export default ToDoUpdateWithWhereUniqueWithoutToDoListInputSchema;
