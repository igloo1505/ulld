import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoWhereInputSchema } from '../ToDoWhereInputSchema.js';
import { ToDoUpdateWithoutChildInputSchema } from '../ToDoUpdateWithoutChildInputSchema.js';
import { ToDoUncheckedUpdateWithoutChildInputSchema } from '../ToDoUncheckedUpdateWithoutChildInputSchema.js';
export const ToDoUpdateToOneWithWhereWithoutChildInputSchema: z.ZodType<Prisma.ToDoUpdateToOneWithWhereWithoutChildInput> = z.object({
  where: z.lazy(() => ToDoWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ToDoUpdateWithoutChildInputSchema),z.lazy(() => ToDoUncheckedUpdateWithoutChildInputSchema) ]),
}).strict();
export default ToDoUpdateToOneWithWhereWithoutChildInputSchema;