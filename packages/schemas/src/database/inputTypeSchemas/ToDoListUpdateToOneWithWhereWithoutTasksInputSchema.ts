import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoListWhereInputSchema } from './ToDoListWhereInputSchema';
import { ToDoListUpdateWithoutTasksInputSchema } from './ToDoListUpdateWithoutTasksInputSchema';
import { ToDoListUncheckedUpdateWithoutTasksInputSchema } from './ToDoListUncheckedUpdateWithoutTasksInputSchema';

export const ToDoListUpdateToOneWithWhereWithoutTasksInputSchema: z.ZodType<Prisma.ToDoListUpdateToOneWithWhereWithoutTasksInput> = z.object({
  where: z.lazy(() => ToDoListWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ToDoListUpdateWithoutTasksInputSchema),z.lazy(() => ToDoListUncheckedUpdateWithoutTasksInputSchema) ]),
}).strict();

export default ToDoListUpdateToOneWithWhereWithoutTasksInputSchema;
