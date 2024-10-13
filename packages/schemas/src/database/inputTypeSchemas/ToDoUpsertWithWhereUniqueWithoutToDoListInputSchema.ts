import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoWhereUniqueInputSchema } from '../ToDoWhereUniqueInputSchema.js';
import { ToDoUpdateWithoutToDoListInputSchema } from '../ToDoUpdateWithoutToDoListInputSchema.js';
import { ToDoUncheckedUpdateWithoutToDoListInputSchema } from '../ToDoUncheckedUpdateWithoutToDoListInputSchema.js';
import { ToDoCreateWithoutToDoListInputSchema } from '../ToDoCreateWithoutToDoListInputSchema.js';
import { ToDoUncheckedCreateWithoutToDoListInputSchema } from '../ToDoUncheckedCreateWithoutToDoListInputSchema.js';
export const ToDoUpsertWithWhereUniqueWithoutToDoListInputSchema: z.ZodType<Prisma.ToDoUpsertWithWhereUniqueWithoutToDoListInput> = z.object({
  where: z.lazy(() => ToDoWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ToDoUpdateWithoutToDoListInputSchema),z.lazy(() => ToDoUncheckedUpdateWithoutToDoListInputSchema) ]),
  create: z.union([ z.lazy(() => ToDoCreateWithoutToDoListInputSchema),z.lazy(() => ToDoUncheckedCreateWithoutToDoListInputSchema) ]),
}).strict();
export default ToDoUpsertWithWhereUniqueWithoutToDoListInputSchema;