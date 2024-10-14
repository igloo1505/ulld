import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema';
import { ToDoCreateWithoutSubjectsInputSchema } from './ToDoCreateWithoutSubjectsInputSchema';
import { ToDoUncheckedCreateWithoutSubjectsInputSchema } from './ToDoUncheckedCreateWithoutSubjectsInputSchema';

export const ToDoCreateOrConnectWithoutSubjectsInputSchema: z.ZodType<Prisma.ToDoCreateOrConnectWithoutSubjectsInput> = z.object({
  where: z.lazy(() => ToDoWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ToDoCreateWithoutSubjectsInputSchema),z.lazy(() => ToDoUncheckedCreateWithoutSubjectsInputSchema) ]),
}).strict();

export default ToDoCreateOrConnectWithoutSubjectsInputSchema;
