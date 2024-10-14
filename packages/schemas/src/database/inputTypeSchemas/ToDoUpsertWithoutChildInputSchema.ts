import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoUpdateWithoutChildInputSchema } from './ToDoUpdateWithoutChildInputSchema';
import { ToDoUncheckedUpdateWithoutChildInputSchema } from './ToDoUncheckedUpdateWithoutChildInputSchema';
import { ToDoCreateWithoutChildInputSchema } from './ToDoCreateWithoutChildInputSchema';
import { ToDoUncheckedCreateWithoutChildInputSchema } from './ToDoUncheckedCreateWithoutChildInputSchema';
import { ToDoWhereInputSchema } from './ToDoWhereInputSchema';

export const ToDoUpsertWithoutChildInputSchema: z.ZodType<Prisma.ToDoUpsertWithoutChildInput> = z.object({
  update: z.union([ z.lazy(() => ToDoUpdateWithoutChildInputSchema),z.lazy(() => ToDoUncheckedUpdateWithoutChildInputSchema) ]),
  create: z.union([ z.lazy(() => ToDoCreateWithoutChildInputSchema),z.lazy(() => ToDoUncheckedCreateWithoutChildInputSchema) ]),
  where: z.lazy(() => ToDoWhereInputSchema).optional()
}).strict();

export default ToDoUpsertWithoutChildInputSchema;
