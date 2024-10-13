import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoListWhereUniqueInputSchema } from '../ToDoListWhereUniqueInputSchema.js';
import { ToDoListCreateWithoutTopicsInputSchema } from '../ToDoListCreateWithoutTopicsInputSchema.js';
import { ToDoListUncheckedCreateWithoutTopicsInputSchema } from '../ToDoListUncheckedCreateWithoutTopicsInputSchema.js';
export const ToDoListCreateOrConnectWithoutTopicsInputSchema: z.ZodType<Prisma.ToDoListCreateOrConnectWithoutTopicsInput> = z.object({
  where: z.lazy(() => ToDoListWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ToDoListCreateWithoutTopicsInputSchema),z.lazy(() => ToDoListUncheckedCreateWithoutTopicsInputSchema) ]),
}).strict();
export default ToDoListCreateOrConnectWithoutTopicsInputSchema;