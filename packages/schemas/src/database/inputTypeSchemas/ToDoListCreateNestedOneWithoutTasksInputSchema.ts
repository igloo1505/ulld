import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoListCreateWithoutTasksInputSchema } from '../ToDoListCreateWithoutTasksInputSchema.js';
import { ToDoListUncheckedCreateWithoutTasksInputSchema } from '../ToDoListUncheckedCreateWithoutTasksInputSchema.js';
import { ToDoListCreateOrConnectWithoutTasksInputSchema } from '../ToDoListCreateOrConnectWithoutTasksInputSchema.js';
import { ToDoListWhereUniqueInputSchema } from '../ToDoListWhereUniqueInputSchema.js';
export const ToDoListCreateNestedOneWithoutTasksInputSchema: z.ZodType<Prisma.ToDoListCreateNestedOneWithoutTasksInput> = z.object({
  create: z.union([ z.lazy(() => ToDoListCreateWithoutTasksInputSchema),z.lazy(() => ToDoListUncheckedCreateWithoutTasksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ToDoListCreateOrConnectWithoutTasksInputSchema).optional(),
  connect: z.lazy(() => ToDoListWhereUniqueInputSchema).optional()
}).strict();
export default ToDoListCreateNestedOneWithoutTasksInputSchema;