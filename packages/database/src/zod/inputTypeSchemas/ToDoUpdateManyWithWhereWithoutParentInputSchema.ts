import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoScalarWhereInputSchema } from './ToDoScalarWhereInputSchema';
import { ToDoUpdateManyMutationInputSchema } from './ToDoUpdateManyMutationInputSchema';
import { ToDoUncheckedUpdateManyWithoutParentInputSchema } from './ToDoUncheckedUpdateManyWithoutParentInputSchema';

export const ToDoUpdateManyWithWhereWithoutParentInputSchema: z.ZodType<Prisma.ToDoUpdateManyWithWhereWithoutParentInput> = z.object({
  where: z.lazy(() => ToDoScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ToDoUpdateManyMutationInputSchema),z.lazy(() => ToDoUncheckedUpdateManyWithoutParentInputSchema) ]),
}).strict();

export default ToDoUpdateManyWithWhereWithoutParentInputSchema;
