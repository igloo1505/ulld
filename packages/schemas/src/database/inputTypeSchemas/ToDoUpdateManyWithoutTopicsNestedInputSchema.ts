import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoCreateWithoutTopicsInputSchema } from '../ToDoCreateWithoutTopicsInputSchema.js';
import { ToDoUncheckedCreateWithoutTopicsInputSchema } from '../ToDoUncheckedCreateWithoutTopicsInputSchema.js';
import { ToDoCreateOrConnectWithoutTopicsInputSchema } from '../ToDoCreateOrConnectWithoutTopicsInputSchema.js';
import { ToDoUpsertWithWhereUniqueWithoutTopicsInputSchema } from '../ToDoUpsertWithWhereUniqueWithoutTopicsInputSchema.js';
import { ToDoWhereUniqueInputSchema } from '../ToDoWhereUniqueInputSchema.js';
import { ToDoUpdateWithWhereUniqueWithoutTopicsInputSchema } from '../ToDoUpdateWithWhereUniqueWithoutTopicsInputSchema.js';
import { ToDoUpdateManyWithWhereWithoutTopicsInputSchema } from '../ToDoUpdateManyWithWhereWithoutTopicsInputSchema.js';
import { ToDoScalarWhereInputSchema } from '../ToDoScalarWhereInputSchema.js';
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