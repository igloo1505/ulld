import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoScalarWhereInputSchema } from './ToDoScalarWhereInputSchema';
import { ToDoUpdateManyMutationInputSchema } from './ToDoUpdateManyMutationInputSchema';
import { ToDoUncheckedUpdateManyWithoutToDoListInputSchema } from './ToDoUncheckedUpdateManyWithoutToDoListInputSchema';

export const ToDoUpdateManyWithWhereWithoutToDoListInputSchema: z.ZodType<Prisma.ToDoUpdateManyWithWhereWithoutToDoListInput> = z.object({
  where: z.lazy(() => ToDoScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ToDoUpdateManyMutationInputSchema),z.lazy(() => ToDoUncheckedUpdateManyWithoutToDoListInputSchema) ]),
}).strict();

export default ToDoUpdateManyWithWhereWithoutToDoListInputSchema;
