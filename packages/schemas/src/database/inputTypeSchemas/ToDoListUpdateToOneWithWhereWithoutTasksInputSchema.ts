import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoListWhereInputSchema } from '../ToDoListWhereInputSchema.js';
import { ToDoListUpdateWithoutTasksInputSchema } from '../ToDoListUpdateWithoutTasksInputSchema.js';
import { ToDoListUncheckedUpdateWithoutTasksInputSchema } from '../ToDoListUncheckedUpdateWithoutTasksInputSchema.js';
export const ToDoListUpdateToOneWithWhereWithoutTasksInputSchema: z.ZodType<Prisma.ToDoListUpdateToOneWithWhereWithoutTasksInput> = z.object({
  where: z.lazy(() => ToDoListWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ToDoListUpdateWithoutTasksInputSchema),z.lazy(() => ToDoListUncheckedUpdateWithoutTasksInputSchema) ]),
}).strict();
export default ToDoListUpdateToOneWithWhereWithoutTasksInputSchema;