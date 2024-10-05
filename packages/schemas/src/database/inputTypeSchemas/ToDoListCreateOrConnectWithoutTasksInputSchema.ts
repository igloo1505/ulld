import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoListWhereUniqueInputSchema } from './ToDoListWhereUniqueInputSchema';
import { ToDoListCreateWithoutTasksInputSchema } from './ToDoListCreateWithoutTasksInputSchema';
import { ToDoListUncheckedCreateWithoutTasksInputSchema } from './ToDoListUncheckedCreateWithoutTasksInputSchema';

export const ToDoListCreateOrConnectWithoutTasksInputSchema: z.ZodType<Prisma.ToDoListCreateOrConnectWithoutTasksInput> = z.object({
  where: z.lazy(() => ToDoListWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ToDoListCreateWithoutTasksInputSchema),z.lazy(() => ToDoListUncheckedCreateWithoutTasksInputSchema) ]),
}).strict();

export default ToDoListCreateOrConnectWithoutTasksInputSchema;
