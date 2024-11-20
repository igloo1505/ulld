import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoListWhereUniqueInputSchema } from './ToDoListWhereUniqueInputSchema';
import { ToDoListUpdateWithoutTopicsInputSchema } from './ToDoListUpdateWithoutTopicsInputSchema';
import { ToDoListUncheckedUpdateWithoutTopicsInputSchema } from './ToDoListUncheckedUpdateWithoutTopicsInputSchema';
import { ToDoListCreateWithoutTopicsInputSchema } from './ToDoListCreateWithoutTopicsInputSchema';
import { ToDoListUncheckedCreateWithoutTopicsInputSchema } from './ToDoListUncheckedCreateWithoutTopicsInputSchema';

export const ToDoListUpsertWithWhereUniqueWithoutTopicsInputSchema: z.ZodType<Prisma.ToDoListUpsertWithWhereUniqueWithoutTopicsInput> = z.object({
  where: z.lazy(() => ToDoListWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ToDoListUpdateWithoutTopicsInputSchema),z.lazy(() => ToDoListUncheckedUpdateWithoutTopicsInputSchema) ]),
  create: z.union([ z.lazy(() => ToDoListCreateWithoutTopicsInputSchema),z.lazy(() => ToDoListUncheckedCreateWithoutTopicsInputSchema) ]),
}).strict();

export default ToDoListUpsertWithWhereUniqueWithoutTopicsInputSchema;
