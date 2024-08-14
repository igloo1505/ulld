import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoScalarWhereInputSchema } from './ToDoScalarWhereInputSchema';
import { ToDoUpdateManyMutationInputSchema } from './ToDoUpdateManyMutationInputSchema';
import { ToDoUncheckedUpdateManyWithoutTopicsInputSchema } from './ToDoUncheckedUpdateManyWithoutTopicsInputSchema';

export const ToDoUpdateManyWithWhereWithoutTopicsInputSchema: z.ZodType<Prisma.ToDoUpdateManyWithWhereWithoutTopicsInput> = z.object({
  where: z.lazy(() => ToDoScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ToDoUpdateManyMutationInputSchema),z.lazy(() => ToDoUncheckedUpdateManyWithoutTopicsInputSchema) ]),
}).strict();

export default ToDoUpdateManyWithWhereWithoutTopicsInputSchema;
