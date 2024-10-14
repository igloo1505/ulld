import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoListWhereUniqueInputSchema } from './ToDoListWhereUniqueInputSchema';
import { ToDoListUpdateWithoutTopicsInputSchema } from './ToDoListUpdateWithoutTopicsInputSchema';
import { ToDoListUncheckedUpdateWithoutTopicsInputSchema } from './ToDoListUncheckedUpdateWithoutTopicsInputSchema';

export const ToDoListUpdateWithWhereUniqueWithoutTopicsInputSchema: z.ZodType<Prisma.ToDoListUpdateWithWhereUniqueWithoutTopicsInput> = z.object({
  where: z.lazy(() => ToDoListWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ToDoListUpdateWithoutTopicsInputSchema),z.lazy(() => ToDoListUncheckedUpdateWithoutTopicsInputSchema) ]),
}).strict();

export default ToDoListUpdateWithWhereUniqueWithoutTopicsInputSchema;
