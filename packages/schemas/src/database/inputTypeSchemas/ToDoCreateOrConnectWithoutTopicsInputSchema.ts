import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoWhereUniqueInputSchema } from '../ToDoWhereUniqueInputSchema.js';
import { ToDoCreateWithoutTopicsInputSchema } from '../ToDoCreateWithoutTopicsInputSchema.js';
import { ToDoUncheckedCreateWithoutTopicsInputSchema } from '../ToDoUncheckedCreateWithoutTopicsInputSchema.js';
export const ToDoCreateOrConnectWithoutTopicsInputSchema: z.ZodType<Prisma.ToDoCreateOrConnectWithoutTopicsInput> = z.object({
  where: z.lazy(() => ToDoWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ToDoCreateWithoutTopicsInputSchema),z.lazy(() => ToDoUncheckedCreateWithoutTopicsInputSchema) ]),
}).strict();
export default ToDoCreateOrConnectWithoutTopicsInputSchema;