import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoListCreateWithoutTasksInputSchema } from './ToDoListCreateWithoutTasksInputSchema';
import { ToDoListUncheckedCreateWithoutTasksInputSchema } from './ToDoListUncheckedCreateWithoutTasksInputSchema';
import { ToDoListCreateOrConnectWithoutTasksInputSchema } from './ToDoListCreateOrConnectWithoutTasksInputSchema';
import { ToDoListUpsertWithoutTasksInputSchema } from './ToDoListUpsertWithoutTasksInputSchema';
import { ToDoListWhereInputSchema } from './ToDoListWhereInputSchema';
import { ToDoListWhereUniqueInputSchema } from './ToDoListWhereUniqueInputSchema';
import { ToDoListUpdateToOneWithWhereWithoutTasksInputSchema } from './ToDoListUpdateToOneWithWhereWithoutTasksInputSchema';
import { ToDoListUpdateWithoutTasksInputSchema } from './ToDoListUpdateWithoutTasksInputSchema';
import { ToDoListUncheckedUpdateWithoutTasksInputSchema } from './ToDoListUncheckedUpdateWithoutTasksInputSchema';

export const ToDoListUpdateOneWithoutTasksNestedInputSchema: z.ZodType<Prisma.ToDoListUpdateOneWithoutTasksNestedInput> = z.object({
  create: z.union([ z.lazy(() => ToDoListCreateWithoutTasksInputSchema),z.lazy(() => ToDoListUncheckedCreateWithoutTasksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ToDoListCreateOrConnectWithoutTasksInputSchema).optional(),
  upsert: z.lazy(() => ToDoListUpsertWithoutTasksInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ToDoListWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ToDoListWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ToDoListWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ToDoListUpdateToOneWithWhereWithoutTasksInputSchema),z.lazy(() => ToDoListUpdateWithoutTasksInputSchema),z.lazy(() => ToDoListUncheckedUpdateWithoutTasksInputSchema) ]).optional(),
}).strict();

export default ToDoListUpdateOneWithoutTasksNestedInputSchema;
