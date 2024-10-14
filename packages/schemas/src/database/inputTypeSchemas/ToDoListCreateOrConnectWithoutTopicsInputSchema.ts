import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoListWhereUniqueInputSchema } from './ToDoListWhereUniqueInputSchema';
import { ToDoListCreateWithoutTopicsInputSchema } from './ToDoListCreateWithoutTopicsInputSchema';
import { ToDoListUncheckedCreateWithoutTopicsInputSchema } from './ToDoListUncheckedCreateWithoutTopicsInputSchema';

export const ToDoListCreateOrConnectWithoutTopicsInputSchema: z.ZodType<Prisma.ToDoListCreateOrConnectWithoutTopicsInput> = z.object({
  where: z.lazy(() => ToDoListWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ToDoListCreateWithoutTopicsInputSchema),z.lazy(() => ToDoListUncheckedCreateWithoutTopicsInputSchema) ]),
}).strict();

export default ToDoListCreateOrConnectWithoutTopicsInputSchema;
