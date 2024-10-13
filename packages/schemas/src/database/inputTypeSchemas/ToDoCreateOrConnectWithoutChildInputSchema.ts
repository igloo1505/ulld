import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoWhereUniqueInputSchema } from '../ToDoWhereUniqueInputSchema.js';
import { ToDoCreateWithoutChildInputSchema } from '../ToDoCreateWithoutChildInputSchema.js';
import { ToDoUncheckedCreateWithoutChildInputSchema } from '../ToDoUncheckedCreateWithoutChildInputSchema.js';
export const ToDoCreateOrConnectWithoutChildInputSchema: z.ZodType<Prisma.ToDoCreateOrConnectWithoutChildInput> = z.object({
  where: z.lazy(() => ToDoWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ToDoCreateWithoutChildInputSchema),z.lazy(() => ToDoUncheckedCreateWithoutChildInputSchema) ]),
}).strict();
export default ToDoCreateOrConnectWithoutChildInputSchema;