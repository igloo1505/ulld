import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoListCreateWithoutTasksInputSchema } from './ToDoListCreateWithoutTasksInputSchema';
import { ToDoListUncheckedCreateWithoutTasksInputSchema } from './ToDoListUncheckedCreateWithoutTasksInputSchema';
import { ToDoListCreateOrConnectWithoutTasksInputSchema } from './ToDoListCreateOrConnectWithoutTasksInputSchema';
import { ToDoListWhereUniqueInputSchema } from './ToDoListWhereUniqueInputSchema';

export const ToDoListCreateNestedOneWithoutTasksInputSchema: z.ZodType<Prisma.ToDoListCreateNestedOneWithoutTasksInput> = z.object({
  create: z.union([ z.lazy(() => ToDoListCreateWithoutTasksInputSchema),z.lazy(() => ToDoListUncheckedCreateWithoutTasksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ToDoListCreateOrConnectWithoutTasksInputSchema).optional(),
  connect: z.lazy(() => ToDoListWhereUniqueInputSchema).optional()
}).strict();

export default ToDoListCreateNestedOneWithoutTasksInputSchema;
