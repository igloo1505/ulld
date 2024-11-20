import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema';
import { ToDoUpdateWithoutTopicsInputSchema } from './ToDoUpdateWithoutTopicsInputSchema';
import { ToDoUncheckedUpdateWithoutTopicsInputSchema } from './ToDoUncheckedUpdateWithoutTopicsInputSchema';
import { ToDoCreateWithoutTopicsInputSchema } from './ToDoCreateWithoutTopicsInputSchema';
import { ToDoUncheckedCreateWithoutTopicsInputSchema } from './ToDoUncheckedCreateWithoutTopicsInputSchema';

export const ToDoUpsertWithWhereUniqueWithoutTopicsInputSchema: z.ZodType<Prisma.ToDoUpsertWithWhereUniqueWithoutTopicsInput> = z.object({
  where: z.lazy(() => ToDoWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ToDoUpdateWithoutTopicsInputSchema),z.lazy(() => ToDoUncheckedUpdateWithoutTopicsInputSchema) ]),
  create: z.union([ z.lazy(() => ToDoCreateWithoutTopicsInputSchema),z.lazy(() => ToDoUncheckedCreateWithoutTopicsInputSchema) ]),
}).strict();

export default ToDoUpsertWithWhereUniqueWithoutTopicsInputSchema;
