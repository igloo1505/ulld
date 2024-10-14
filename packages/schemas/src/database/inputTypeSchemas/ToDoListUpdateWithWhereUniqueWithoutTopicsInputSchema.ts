import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoListWhereUniqueInputSchema } from './ToDoListWhereUniqueInputSchema.js';
import { ToDoListUpdateWithoutTopicsInputSchema } from './ToDoListUpdateWithoutTopicsInputSchema.js';
import { ToDoListUncheckedUpdateWithoutTopicsInputSchema } from './ToDoListUncheckedUpdateWithoutTopicsInputSchema.js';
export const ToDoListUpdateWithWhereUniqueWithoutTopicsInputSchema: z.ZodType<Prisma.ToDoListUpdateWithWhereUniqueWithoutTopicsInput> = z.object({
  where: z.lazy(() => ToDoListWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ToDoListUpdateWithoutTopicsInputSchema),z.lazy(() => ToDoListUncheckedUpdateWithoutTopicsInputSchema) ]),
}).strict();
export default ToDoListUpdateWithWhereUniqueWithoutTopicsInputSchema;