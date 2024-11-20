import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema';
import { ToDoUpdateWithoutTopicsInputSchema } from './ToDoUpdateWithoutTopicsInputSchema';
import { ToDoUncheckedUpdateWithoutTopicsInputSchema } from './ToDoUncheckedUpdateWithoutTopicsInputSchema';

export const ToDoUpdateWithWhereUniqueWithoutTopicsInputSchema: z.ZodType<Prisma.ToDoUpdateWithWhereUniqueWithoutTopicsInput> = z.object({
  where: z.lazy(() => ToDoWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ToDoUpdateWithoutTopicsInputSchema),z.lazy(() => ToDoUncheckedUpdateWithoutTopicsInputSchema) ]),
}).strict();

export default ToDoUpdateWithWhereUniqueWithoutTopicsInputSchema;
