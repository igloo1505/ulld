import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoUpdateWithoutChildInputSchema } from './ToDoUpdateWithoutChildInputSchema.js';
import { ToDoUncheckedUpdateWithoutChildInputSchema } from './ToDoUncheckedUpdateWithoutChildInputSchema.js';
import { ToDoCreateWithoutChildInputSchema } from './ToDoCreateWithoutChildInputSchema.js';
import { ToDoUncheckedCreateWithoutChildInputSchema } from './ToDoUncheckedCreateWithoutChildInputSchema.js';
import { ToDoWhereInputSchema } from './ToDoWhereInputSchema.js';
export const ToDoUpsertWithoutChildInputSchema: z.ZodType<Prisma.ToDoUpsertWithoutChildInput> = z.object({
  update: z.union([ z.lazy(() => ToDoUpdateWithoutChildInputSchema),z.lazy(() => ToDoUncheckedUpdateWithoutChildInputSchema) ]),
  create: z.union([ z.lazy(() => ToDoCreateWithoutChildInputSchema),z.lazy(() => ToDoUncheckedCreateWithoutChildInputSchema) ]),
  where: z.lazy(() => ToDoWhereInputSchema).optional()
}).strict();
export default ToDoUpsertWithoutChildInputSchema;