import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoWhereUniqueInputSchema } from '../ToDoWhereUniqueInputSchema.js';
import { ToDoUpdateWithoutParentInputSchema } from '../ToDoUpdateWithoutParentInputSchema.js';
import { ToDoUncheckedUpdateWithoutParentInputSchema } from '../ToDoUncheckedUpdateWithoutParentInputSchema.js';
export const ToDoUpdateWithWhereUniqueWithoutParentInputSchema: z.ZodType<Prisma.ToDoUpdateWithWhereUniqueWithoutParentInput> = z.object({
  where: z.lazy(() => ToDoWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ToDoUpdateWithoutParentInputSchema),z.lazy(() => ToDoUncheckedUpdateWithoutParentInputSchema) ]),
}).strict();
export default ToDoUpdateWithWhereUniqueWithoutParentInputSchema;