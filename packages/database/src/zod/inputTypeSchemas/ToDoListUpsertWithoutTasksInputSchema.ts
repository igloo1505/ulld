import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoListUpdateWithoutTasksInputSchema } from './ToDoListUpdateWithoutTasksInputSchema';
import { ToDoListUncheckedUpdateWithoutTasksInputSchema } from './ToDoListUncheckedUpdateWithoutTasksInputSchema';
import { ToDoListCreateWithoutTasksInputSchema } from './ToDoListCreateWithoutTasksInputSchema';
import { ToDoListUncheckedCreateWithoutTasksInputSchema } from './ToDoListUncheckedCreateWithoutTasksInputSchema';
import { ToDoListWhereInputSchema } from './ToDoListWhereInputSchema';

export const ToDoListUpsertWithoutTasksInputSchema: z.ZodType<Prisma.ToDoListUpsertWithoutTasksInput> = z.object({
  update: z.union([ z.lazy(() => ToDoListUpdateWithoutTasksInputSchema),z.lazy(() => ToDoListUncheckedUpdateWithoutTasksInputSchema) ]),
  create: z.union([ z.lazy(() => ToDoListCreateWithoutTasksInputSchema),z.lazy(() => ToDoListUncheckedCreateWithoutTasksInputSchema) ]),
  where: z.lazy(() => ToDoListWhereInputSchema).optional()
}).strict();

export default ToDoListUpsertWithoutTasksInputSchema;
