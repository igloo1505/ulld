import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema';
import { ToDoCreateWithoutToDoListInputSchema } from './ToDoCreateWithoutToDoListInputSchema';
import { ToDoUncheckedCreateWithoutToDoListInputSchema } from './ToDoUncheckedCreateWithoutToDoListInputSchema';

export const ToDoCreateOrConnectWithoutToDoListInputSchema: z.ZodType<Prisma.ToDoCreateOrConnectWithoutToDoListInput> = z.object({
  where: z.lazy(() => ToDoWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ToDoCreateWithoutToDoListInputSchema),z.lazy(() => ToDoUncheckedCreateWithoutToDoListInputSchema) ]),
}).strict();

export default ToDoCreateOrConnectWithoutToDoListInputSchema;
