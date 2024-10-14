import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoListCreateWithoutTopicsInputSchema } from './ToDoListCreateWithoutTopicsInputSchema.js';
import { ToDoListUncheckedCreateWithoutTopicsInputSchema } from './ToDoListUncheckedCreateWithoutTopicsInputSchema.js';
import { ToDoListCreateOrConnectWithoutTopicsInputSchema } from './ToDoListCreateOrConnectWithoutTopicsInputSchema.js';
import { ToDoListWhereUniqueInputSchema } from './ToDoListWhereUniqueInputSchema.js';
export const ToDoListUncheckedCreateNestedManyWithoutTopicsInputSchema: z.ZodType<Prisma.ToDoListUncheckedCreateNestedManyWithoutTopicsInput> = z.object({
  create: z.union([ z.lazy(() => ToDoListCreateWithoutTopicsInputSchema),z.lazy(() => ToDoListCreateWithoutTopicsInputSchema).array(),z.lazy(() => ToDoListUncheckedCreateWithoutTopicsInputSchema),z.lazy(() => ToDoListUncheckedCreateWithoutTopicsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ToDoListCreateOrConnectWithoutTopicsInputSchema),z.lazy(() => ToDoListCreateOrConnectWithoutTopicsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ToDoListWhereUniqueInputSchema),z.lazy(() => ToDoListWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default ToDoListUncheckedCreateNestedManyWithoutTopicsInputSchema;