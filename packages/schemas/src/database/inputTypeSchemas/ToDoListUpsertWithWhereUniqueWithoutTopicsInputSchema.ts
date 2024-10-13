import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoListWhereUniqueInputSchema } from '../ToDoListWhereUniqueInputSchema.js';
import { ToDoListUpdateWithoutTopicsInputSchema } from '../ToDoListUpdateWithoutTopicsInputSchema.js';
import { ToDoListUncheckedUpdateWithoutTopicsInputSchema } from '../ToDoListUncheckedUpdateWithoutTopicsInputSchema.js';
import { ToDoListCreateWithoutTopicsInputSchema } from '../ToDoListCreateWithoutTopicsInputSchema.js';
import { ToDoListUncheckedCreateWithoutTopicsInputSchema } from '../ToDoListUncheckedCreateWithoutTopicsInputSchema.js';
export const ToDoListUpsertWithWhereUniqueWithoutTopicsInputSchema: z.ZodType<Prisma.ToDoListUpsertWithWhereUniqueWithoutTopicsInput> = z.object({
  where: z.lazy(() => ToDoListWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ToDoListUpdateWithoutTopicsInputSchema),z.lazy(() => ToDoListUncheckedUpdateWithoutTopicsInputSchema) ]),
  create: z.union([ z.lazy(() => ToDoListCreateWithoutTopicsInputSchema),z.lazy(() => ToDoListUncheckedCreateWithoutTopicsInputSchema) ]),
}).strict();
export default ToDoListUpsertWithWhereUniqueWithoutTopicsInputSchema;