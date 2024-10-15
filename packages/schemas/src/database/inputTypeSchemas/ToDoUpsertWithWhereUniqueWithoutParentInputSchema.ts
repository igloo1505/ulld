import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema.js';
import { ToDoUpdateWithoutParentInputSchema } from './ToDoUpdateWithoutParentInputSchema.js';
import { ToDoUncheckedUpdateWithoutParentInputSchema } from './ToDoUncheckedUpdateWithoutParentInputSchema.js';
import { ToDoCreateWithoutParentInputSchema } from './ToDoCreateWithoutParentInputSchema.js';
import { ToDoUncheckedCreateWithoutParentInputSchema } from './ToDoUncheckedCreateWithoutParentInputSchema.js';
export const ToDoUpsertWithWhereUniqueWithoutParentInputSchema: z.ZodType<Prisma.ToDoUpsertWithWhereUniqueWithoutParentInput> = z.object({
  where: z.lazy(() => ToDoWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ToDoUpdateWithoutParentInputSchema),z.lazy(() => ToDoUncheckedUpdateWithoutParentInputSchema) ]),
  create: z.union([ z.lazy(() => ToDoCreateWithoutParentInputSchema),z.lazy(() => ToDoUncheckedCreateWithoutParentInputSchema) ]),
}).strict();
export default ToDoUpsertWithWhereUniqueWithoutParentInputSchema;