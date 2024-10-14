import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoWhereInputSchema } from './ToDoWhereInputSchema';
import { ToDoUpdateWithoutChildInputSchema } from './ToDoUpdateWithoutChildInputSchema';
import { ToDoUncheckedUpdateWithoutChildInputSchema } from './ToDoUncheckedUpdateWithoutChildInputSchema';

export const ToDoUpdateToOneWithWhereWithoutChildInputSchema: z.ZodType<Prisma.ToDoUpdateToOneWithWhereWithoutChildInput> = z.object({
  where: z.lazy(() => ToDoWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ToDoUpdateWithoutChildInputSchema),z.lazy(() => ToDoUncheckedUpdateWithoutChildInputSchema) ]),
}).strict();

export default ToDoUpdateToOneWithWhereWithoutChildInputSchema;
