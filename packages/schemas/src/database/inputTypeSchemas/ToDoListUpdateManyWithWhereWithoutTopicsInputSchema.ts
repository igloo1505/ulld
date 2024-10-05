import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoListScalarWhereInputSchema } from './ToDoListScalarWhereInputSchema';
import { ToDoListUpdateManyMutationInputSchema } from './ToDoListUpdateManyMutationInputSchema';
import { ToDoListUncheckedUpdateManyWithoutTopicsInputSchema } from './ToDoListUncheckedUpdateManyWithoutTopicsInputSchema';

export const ToDoListUpdateManyWithWhereWithoutTopicsInputSchema: z.ZodType<Prisma.ToDoListUpdateManyWithWhereWithoutTopicsInput> = z.object({
  where: z.lazy(() => ToDoListScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ToDoListUpdateManyMutationInputSchema),z.lazy(() => ToDoListUncheckedUpdateManyWithoutTopicsInputSchema) ]),
}).strict();

export default ToDoListUpdateManyWithWhereWithoutTopicsInputSchema;
