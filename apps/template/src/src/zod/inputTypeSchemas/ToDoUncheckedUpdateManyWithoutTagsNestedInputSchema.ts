import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoCreateWithoutTagsInputSchema } from './ToDoCreateWithoutTagsInputSchema';
import { ToDoUncheckedCreateWithoutTagsInputSchema } from './ToDoUncheckedCreateWithoutTagsInputSchema';
import { ToDoCreateOrConnectWithoutTagsInputSchema } from './ToDoCreateOrConnectWithoutTagsInputSchema';
import { ToDoUpsertWithWhereUniqueWithoutTagsInputSchema } from './ToDoUpsertWithWhereUniqueWithoutTagsInputSchema';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema';
import { ToDoUpdateWithWhereUniqueWithoutTagsInputSchema } from './ToDoUpdateWithWhereUniqueWithoutTagsInputSchema';
import { ToDoUpdateManyWithWhereWithoutTagsInputSchema } from './ToDoUpdateManyWithWhereWithoutTagsInputSchema';
import { ToDoScalarWhereInputSchema } from './ToDoScalarWhereInputSchema';

export const ToDoUncheckedUpdateManyWithoutTagsNestedInputSchema: z.ZodType<Prisma.ToDoUncheckedUpdateManyWithoutTagsNestedInput> = z.object({
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

export default ToDoUncheckedUpdateManyWithoutTagsNestedInputSchema;
