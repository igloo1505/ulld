import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoListWhereUniqueInputSchema } from './ToDoListWhereUniqueInputSchema';
import { ToDoListCreateWithoutSubjectsInputSchema } from './ToDoListCreateWithoutSubjectsInputSchema';
import { ToDoListUncheckedCreateWithoutSubjectsInputSchema } from './ToDoListUncheckedCreateWithoutSubjectsInputSchema';

export const ToDoListCreateOrConnectWithoutSubjectsInputSchema: z.ZodType<Prisma.ToDoListCreateOrConnectWithoutSubjectsInput> = z.object({
  where: z.lazy(() => ToDoListWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ToDoListCreateWithoutSubjectsInputSchema),z.lazy(() => ToDoListUncheckedCreateWithoutSubjectsInputSchema) ]),
}).strict();

export default ToDoListCreateOrConnectWithoutSubjectsInputSchema;
