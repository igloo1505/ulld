import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoCreateWithoutTopicsInputSchema } from './ToDoCreateWithoutTopicsInputSchema';
import { ToDoUncheckedCreateWithoutTopicsInputSchema } from './ToDoUncheckedCreateWithoutTopicsInputSchema';
import { ToDoCreateOrConnectWithoutTopicsInputSchema } from './ToDoCreateOrConnectWithoutTopicsInputSchema';
import { ToDoUpsertWithWhereUniqueWithoutTopicsInputSchema } from './ToDoUpsertWithWhereUniqueWithoutTopicsInputSchema';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema';
import { ToDoUpdateWithWhereUniqueWithoutTopicsInputSchema } from './ToDoUpdateWithWhereUniqueWithoutTopicsInputSchema';
import { ToDoUpdateManyWithWhereWithoutTopicsInputSchema } from './ToDoUpdateManyWithWhereWithoutTopicsInputSchema';
import { ToDoScalarWhereInputSchema } from './ToDoScalarWhereInputSchema';

export const ToDoUpdateManyWithoutTopicsNestedInputSchema: z.ZodType<Prisma.ToDoUpdateManyWithoutTopicsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ToDoCreateWithoutTopicsInputSchema),z.lazy(() => ToDoCreateWithoutTopicsInputSchema).array(),z.lazy(() => ToDoUncheckedCreateWithoutTopicsInputSchema),z.lazy(() => ToDoUncheckedCreateWithoutTopicsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ToDoCreateOrConnectWithoutTopicsInputSchema),z.lazy(() => ToDoCreateOrConnectWithoutTopicsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ToDoUpsertWithWhereUniqueWithoutTopicsInputSchema),z.lazy(() => ToDoUpsertWithWhereUniqueWithoutTopicsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ToDoWhereUniqueInputSchema),z.lazy(() => ToDoWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ToDoWhereUniqueInputSchema),z.lazy(() => ToDoWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ToDoWhereUniqueInputSchema),z.lazy(() => ToDoWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ToDoWhereUniqueInputSchema),z.lazy(() => ToDoWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ToDoUpdateWithWhereUniqueWithoutTopicsInputSchema),z.lazy(() => ToDoUpdateWithWhereUniqueWithoutTopicsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ToDoUpdateManyWithWhereWithoutTopicsInputSchema),z.lazy(() => ToDoUpdateManyWithWhereWithoutTopicsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ToDoScalarWhereInputSchema),z.lazy(() => ToDoScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ToDoUpdateManyWithoutTopicsNestedInputSchema;
