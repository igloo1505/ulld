import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoWhereUniqueInputSchema } from '../ToDoWhereUniqueInputSchema.js';
import { ToDoUpdateWithoutToDoListInputSchema } from '../ToDoUpdateWithoutToDoListInputSchema.js';
import { ToDoUncheckedUpdateWithoutToDoListInputSchema } from '../ToDoUncheckedUpdateWithoutToDoListInputSchema.js';
export const ToDoUpdateWithWhereUniqueWithoutToDoListInputSchema: z.ZodType<Prisma.ToDoUpdateWithWhereUniqueWithoutToDoListInput> = z.object({
  where: z.lazy(() => ToDoWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ToDoUpdateWithoutToDoListInputSchema),z.lazy(() => ToDoUncheckedUpdateWithoutToDoListInputSchema) ]),
}).strict();
export default ToDoUpdateWithWhereUniqueWithoutToDoListInputSchema;