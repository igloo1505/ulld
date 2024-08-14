import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema';
import { ToDoUpdateWithoutParentInputSchema } from './ToDoUpdateWithoutParentInputSchema';
import { ToDoUncheckedUpdateWithoutParentInputSchema } from './ToDoUncheckedUpdateWithoutParentInputSchema';
import { ToDoCreateWithoutParentInputSchema } from './ToDoCreateWithoutParentInputSchema';
import { ToDoUncheckedCreateWithoutParentInputSchema } from './ToDoUncheckedCreateWithoutParentInputSchema';

export const ToDoUpsertWithWhereUniqueWithoutParentInputSchema: z.ZodType<Prisma.ToDoUpsertWithWhereUniqueWithoutParentInput> = z.object({
  where: z.lazy(() => ToDoWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ToDoUpdateWithoutParentInputSchema),z.lazy(() => ToDoUncheckedUpdateWithoutParentInputSchema) ]),
  create: z.union([ z.lazy(() => ToDoCreateWithoutParentInputSchema),z.lazy(() => ToDoUncheckedCreateWithoutParentInputSchema) ]),
}).strict();

export default ToDoUpsertWithWhereUniqueWithoutParentInputSchema;
