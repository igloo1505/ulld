import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema';
import { ToDoCreateWithoutTopicsInputSchema } from './ToDoCreateWithoutTopicsInputSchema';
import { ToDoUncheckedCreateWithoutTopicsInputSchema } from './ToDoUncheckedCreateWithoutTopicsInputSchema';

export const ToDoCreateOrConnectWithoutTopicsInputSchema: z.ZodType<Prisma.ToDoCreateOrConnectWithoutTopicsInput> = z.object({
  where: z.lazy(() => ToDoWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ToDoCreateWithoutTopicsInputSchema),z.lazy(() => ToDoUncheckedCreateWithoutTopicsInputSchema) ]),
}).strict();

export default ToDoCreateOrConnectWithoutTopicsInputSchema;
