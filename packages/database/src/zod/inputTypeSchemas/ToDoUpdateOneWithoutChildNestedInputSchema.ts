import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoCreateWithoutChildInputSchema } from './ToDoCreateWithoutChildInputSchema';
import { ToDoUncheckedCreateWithoutChildInputSchema } from './ToDoUncheckedCreateWithoutChildInputSchema';
import { ToDoCreateOrConnectWithoutChildInputSchema } from './ToDoCreateOrConnectWithoutChildInputSchema';
import { ToDoUpsertWithoutChildInputSchema } from './ToDoUpsertWithoutChildInputSchema';
import { ToDoWhereInputSchema } from './ToDoWhereInputSchema';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema';
import { ToDoUpdateToOneWithWhereWithoutChildInputSchema } from './ToDoUpdateToOneWithWhereWithoutChildInputSchema';
import { ToDoUpdateWithoutChildInputSchema } from './ToDoUpdateWithoutChildInputSchema';
import { ToDoUncheckedUpdateWithoutChildInputSchema } from './ToDoUncheckedUpdateWithoutChildInputSchema';

export const ToDoUpdateOneWithoutChildNestedInputSchema: z.ZodType<Prisma.ToDoUpdateOneWithoutChildNestedInput> = z.object({
  create: z.union([ z.lazy(() => ToDoCreateWithoutChildInputSchema),z.lazy(() => ToDoUncheckedCreateWithoutChildInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ToDoCreateOrConnectWithoutChildInputSchema).optional(),
  upsert: z.lazy(() => ToDoUpsertWithoutChildInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ToDoWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ToDoWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ToDoWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ToDoUpdateToOneWithWhereWithoutChildInputSchema),z.lazy(() => ToDoUpdateWithoutChildInputSchema),z.lazy(() => ToDoUncheckedUpdateWithoutChildInputSchema) ]).optional(),
}).strict();

export default ToDoUpdateOneWithoutChildNestedInputSchema;
