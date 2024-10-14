import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoCreateWithoutTagsInputSchema } from './ToDoCreateWithoutTagsInputSchema.js';
import { ToDoUncheckedCreateWithoutTagsInputSchema } from './ToDoUncheckedCreateWithoutTagsInputSchema.js';
import { ToDoCreateOrConnectWithoutTagsInputSchema } from './ToDoCreateOrConnectWithoutTagsInputSchema.js';
import { ToDoUpsertWithWhereUniqueWithoutTagsInputSchema } from './ToDoUpsertWithWhereUniqueWithoutTagsInputSchema.js';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema.js';
import { ToDoUpdateWithWhereUniqueWithoutTagsInputSchema } from './ToDoUpdateWithWhereUniqueWithoutTagsInputSchema.js';
import { ToDoUpdateManyWithWhereWithoutTagsInputSchema } from './ToDoUpdateManyWithWhereWithoutTagsInputSchema.js';
import { ToDoScalarWhereInputSchema } from './ToDoScalarWhereInputSchema.js';
export const ToDoUpdateManyWithoutTagsNestedInputSchema: z.ZodType<Prisma.ToDoUpdateManyWithoutTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ToDoCreateWithoutTagsInputSchema),z.lazy(() => ToDoCreateWithoutTagsInputSchema).array(),z.lazy(() => ToDoUncheckedCreateWithoutTagsInputSchema),z.lazy(() => ToDoUncheckedCreateWithoutTagsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ToDoCreateOrConnectWithoutTagsInputSchema),z.lazy(() => ToDoCreateOrConnectWithoutTagsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ToDoUpsertWithWhereUniqueWithoutTagsInputSchema),z.lazy(() => ToDoUpsertWithWhereUniqueWithoutTagsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ToDoWhereUniqueInputSchema),z.lazy(() => ToDoWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ToDoWhereUniqueInputSchema),z.lazy(() => ToDoWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ToDoWhereUniqueInputSchema),z.lazy(() => ToDoWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ToDoWhereUniqueInputSchema),z.lazy(() => ToDoWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ToDoUpdateWithWhereUniqueWithoutTagsInputSchema),z.lazy(() => ToDoUpdateWithWhereUniqueWithoutTagsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ToDoUpdateManyWithWhereWithoutTagsInputSchema),z.lazy(() => ToDoUpdateManyWithWhereWithoutTagsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ToDoScalarWhereInputSchema),z.lazy(() => ToDoScalarWhereInputSchema).array() ]).optional(),
}).strict();
export default ToDoUpdateManyWithoutTagsNestedInputSchema;