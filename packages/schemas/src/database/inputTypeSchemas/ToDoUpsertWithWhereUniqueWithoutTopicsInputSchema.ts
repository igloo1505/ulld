import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema.js';
import { ToDoUpdateWithoutTopicsInputSchema } from './ToDoUpdateWithoutTopicsInputSchema.js';
import { ToDoUncheckedUpdateWithoutTopicsInputSchema } from './ToDoUncheckedUpdateWithoutTopicsInputSchema.js';
import { ToDoCreateWithoutTopicsInputSchema } from './ToDoCreateWithoutTopicsInputSchema.js';
import { ToDoUncheckedCreateWithoutTopicsInputSchema } from './ToDoUncheckedCreateWithoutTopicsInputSchema.js';
export const ToDoUpsertWithWhereUniqueWithoutTopicsInputSchema: z.ZodType<Prisma.ToDoUpsertWithWhereUniqueWithoutTopicsInput> = z.object({
  where: z.lazy(() => ToDoWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ToDoUpdateWithoutTopicsInputSchema),z.lazy(() => ToDoUncheckedUpdateWithoutTopicsInputSchema) ]),
  create: z.union([ z.lazy(() => ToDoCreateWithoutTopicsInputSchema),z.lazy(() => ToDoUncheckedCreateWithoutTopicsInputSchema) ]),
}).strict();
export default ToDoUpsertWithWhereUniqueWithoutTopicsInputSchema;