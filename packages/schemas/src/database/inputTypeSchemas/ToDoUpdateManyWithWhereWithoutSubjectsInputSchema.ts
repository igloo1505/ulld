import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoScalarWhereInputSchema } from './ToDoScalarWhereInputSchema';
import { ToDoUpdateManyMutationInputSchema } from './ToDoUpdateManyMutationInputSchema';
import { ToDoUncheckedUpdateManyWithoutSubjectsInputSchema } from './ToDoUncheckedUpdateManyWithoutSubjectsInputSchema';

export const ToDoUpdateManyWithWhereWithoutSubjectsInputSchema: z.ZodType<Prisma.ToDoUpdateManyWithWhereWithoutSubjectsInput> = z.object({
  where: z.lazy(() => ToDoScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ToDoUpdateManyMutationInputSchema),z.lazy(() => ToDoUncheckedUpdateManyWithoutSubjectsInputSchema) ]),
}).strict();

export default ToDoUpdateManyWithWhereWithoutSubjectsInputSchema;
