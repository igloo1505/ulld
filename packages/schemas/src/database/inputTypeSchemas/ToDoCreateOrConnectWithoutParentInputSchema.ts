import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema';
import { ToDoCreateWithoutParentInputSchema } from './ToDoCreateWithoutParentInputSchema';
import { ToDoUncheckedCreateWithoutParentInputSchema } from './ToDoUncheckedCreateWithoutParentInputSchema';

export const ToDoCreateOrConnectWithoutParentInputSchema: z.ZodType<Prisma.ToDoCreateOrConnectWithoutParentInput> = z.object({
  where: z.lazy(() => ToDoWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ToDoCreateWithoutParentInputSchema),z.lazy(() => ToDoUncheckedCreateWithoutParentInputSchema) ]),
}).strict();

export default ToDoCreateOrConnectWithoutParentInputSchema;
