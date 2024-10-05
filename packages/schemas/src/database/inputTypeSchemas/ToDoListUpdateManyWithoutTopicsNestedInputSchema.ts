import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoListCreateWithoutTopicsInputSchema } from './ToDoListCreateWithoutTopicsInputSchema';
import { ToDoListUncheckedCreateWithoutTopicsInputSchema } from './ToDoListUncheckedCreateWithoutTopicsInputSchema';
import { ToDoListCreateOrConnectWithoutTopicsInputSchema } from './ToDoListCreateOrConnectWithoutTopicsInputSchema';
import { ToDoListUpsertWithWhereUniqueWithoutTopicsInputSchema } from './ToDoListUpsertWithWhereUniqueWithoutTopicsInputSchema';
import { ToDoListWhereUniqueInputSchema } from './ToDoListWhereUniqueInputSchema';
import { ToDoListUpdateWithWhereUniqueWithoutTopicsInputSchema } from './ToDoListUpdateWithWhereUniqueWithoutTopicsInputSchema';
import { ToDoListUpdateManyWithWhereWithoutTopicsInputSchema } from './ToDoListUpdateManyWithWhereWithoutTopicsInputSchema';
import { ToDoListScalarWhereInputSchema } from './ToDoListScalarWhereInputSchema';

export const ToDoListUpdateManyWithoutTopicsNestedInputSchema: z.ZodType<Prisma.ToDoListUpdateManyWithoutTopicsNestedInput> = z.object({
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

export default ToDoListUpdateManyWithoutTopicsNestedInputSchema;
