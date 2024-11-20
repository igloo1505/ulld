import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema';
import { ToDoUpdateWithoutParentInputSchema } from './ToDoUpdateWithoutParentInputSchema';
import { ToDoUncheckedUpdateWithoutParentInputSchema } from './ToDoUncheckedUpdateWithoutParentInputSchema';

export const ToDoUpdateWithWhereUniqueWithoutParentInputSchema: z.ZodType<Prisma.ToDoUpdateWithWhereUniqueWithoutParentInput> = z.object({
  where: z.lazy(() => ToDoWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ToDoUpdateWithoutParentInputSchema),z.lazy(() => ToDoUncheckedUpdateWithoutParentInputSchema) ]),
}).strict();

export default ToDoUpdateWithWhereUniqueWithoutParentInputSchema;
