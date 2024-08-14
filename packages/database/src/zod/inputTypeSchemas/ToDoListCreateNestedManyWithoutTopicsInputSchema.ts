import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoListCreateWithoutTopicsInputSchema } from './ToDoListCreateWithoutTopicsInputSchema';
import { ToDoListUncheckedCreateWithoutTopicsInputSchema } from './ToDoListUncheckedCreateWithoutTopicsInputSchema';
import { ToDoListCreateOrConnectWithoutTopicsInputSchema } from './ToDoListCreateOrConnectWithoutTopicsInputSchema';
import { ToDoListWhereUniqueInputSchema } from './ToDoListWhereUniqueInputSchema';

export const ToDoListCreateNestedManyWithoutTopicsInputSchema: z.ZodType<Prisma.ToDoListCreateNestedManyWithoutTopicsInput> = z.object({
  create: z.union([ z.lazy(() => ToDoListCreateWithoutTopicsInputSchema),z.lazy(() => ToDoListCreateWithoutTopicsInputSchema).array(),z.lazy(() => ToDoListUncheckedCreateWithoutTopicsInputSchema),z.lazy(() => ToDoListUncheckedCreateWithoutTopicsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ToDoListCreateOrConnectWithoutTopicsInputSchema),z.lazy(() => ToDoListCreateOrConnectWithoutTopicsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ToDoListWhereUniqueInputSchema),z.lazy(() => ToDoListWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ToDoListCreateNestedManyWithoutTopicsInputSchema;
