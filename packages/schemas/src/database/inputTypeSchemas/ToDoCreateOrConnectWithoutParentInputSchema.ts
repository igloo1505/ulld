import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoWhereUniqueInputSchema } from './ToDoWhereUniqueInputSchema.js';
import { ToDoCreateWithoutParentInputSchema } from './ToDoCreateWithoutParentInputSchema.js';
import { ToDoUncheckedCreateWithoutParentInputSchema } from './ToDoUncheckedCreateWithoutParentInputSchema.js';
export const ToDoCreateOrConnectWithoutParentInputSchema: z.ZodType<Prisma.ToDoCreateOrConnectWithoutParentInput> = z.object({
  where: z.lazy(() => ToDoWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ToDoCreateWithoutParentInputSchema),z.lazy(() => ToDoUncheckedCreateWithoutParentInputSchema) ]),
}).strict();
export default ToDoCreateOrConnectWithoutParentInputSchema;