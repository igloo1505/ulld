import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoListCreateWithoutTopicsInputSchema } from './ToDoListCreateWithoutTopicsInputSchema.js';
import { ToDoListUncheckedCreateWithoutTopicsInputSchema } from './ToDoListUncheckedCreateWithoutTopicsInputSchema.js';
import { ToDoListCreateOrConnectWithoutTopicsInputSchema } from './ToDoListCreateOrConnectWithoutTopicsInputSchema.js';
import { ToDoListUpsertWithWhereUniqueWithoutTopicsInputSchema } from './ToDoListUpsertWithWhereUniqueWithoutTopicsInputSchema.js';
import { ToDoListWhereUniqueInputSchema } from './ToDoListWhereUniqueInputSchema.js';
import { ToDoListUpdateWithWhereUniqueWithoutTopicsInputSchema } from './ToDoListUpdateWithWhereUniqueWithoutTopicsInputSchema.js';
import { ToDoListUpdateManyWithWhereWithoutTopicsInputSchema } from './ToDoListUpdateManyWithWhereWithoutTopicsInputSchema.js';
import { ToDoListScalarWhereInputSchema } from './ToDoListScalarWhereInputSchema.js';
export const ToDoListUncheckedUpdateManyWithoutTopicsNestedInputSchema: z.ZodType<Prisma.ToDoListUncheckedUpdateManyWithoutTopicsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ToDoListCreateWithoutTopicsInputSchema),z.lazy(() => ToDoListCreateWithoutTopicsInputSchema).array(),z.lazy(() => ToDoListUncheckedCreateWithoutTopicsInputSchema),z.lazy(() => ToDoListUncheckedCreateWithoutTopicsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ToDoListCreateOrConnectWithoutTopicsInputSchema),z.lazy(() => ToDoListCreateOrConnectWithoutTopicsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ToDoListUpsertWithWhereUniqueWithoutTopicsInputSchema),z.lazy(() => ToDoListUpsertWithWhereUniqueWithoutTopicsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ToDoListWhereUniqueInputSchema),z.lazy(() => ToDoListWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ToDoListWhereUniqueInputSchema),z.lazy(() => ToDoListWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ToDoListWhereUniqueInputSchema),z.lazy(() => ToDoListWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ToDoListWhereUniqueInputSchema),z.lazy(() => ToDoListWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ToDoListUpdateWithWhereUniqueWithoutTopicsInputSchema),z.lazy(() => ToDoListUpdateWithWhereUniqueWithoutTopicsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ToDoListUpdateManyWithWhereWithoutTopicsInputSchema),z.lazy(() => ToDoListUpdateManyWithWhereWithoutTopicsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ToDoListScalarWhereInputSchema),z.lazy(() => ToDoListScalarWhereInputSchema).array() ]).optional(),
}).strict();
export default ToDoListUncheckedUpdateManyWithoutTopicsNestedInputSchema;