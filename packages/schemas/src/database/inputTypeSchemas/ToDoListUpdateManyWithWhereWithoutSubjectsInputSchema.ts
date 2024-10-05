import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoListScalarWhereInputSchema } from './ToDoListScalarWhereInputSchema';
import { ToDoListUpdateManyMutationInputSchema } from './ToDoListUpdateManyMutationInputSchema';
import { ToDoListUncheckedUpdateManyWithoutSubjectsInputSchema } from './ToDoListUncheckedUpdateManyWithoutSubjectsInputSchema';

export const ToDoListUpdateManyWithWhereWithoutSubjectsInputSchema: z.ZodType<Prisma.ToDoListUpdateManyWithWhereWithoutSubjectsInput> = z.object({
  where: z.lazy(() => ToDoListScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ToDoListUpdateManyMutationInputSchema),z.lazy(() => ToDoListUncheckedUpdateManyWithoutSubjectsInputSchema) ]),
}).strict();

export default ToDoListUpdateManyWithWhereWithoutSubjectsInputSchema;
