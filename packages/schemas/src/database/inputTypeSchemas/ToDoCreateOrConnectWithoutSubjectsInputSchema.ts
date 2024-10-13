import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoWhereUniqueInputSchema } from '../ToDoWhereUniqueInputSchema.js';
import { ToDoCreateWithoutSubjectsInputSchema } from '../ToDoCreateWithoutSubjectsInputSchema.js';
import { ToDoUncheckedCreateWithoutSubjectsInputSchema } from '../ToDoUncheckedCreateWithoutSubjectsInputSchema.js';
export const ToDoCreateOrConnectWithoutSubjectsInputSchema: z.ZodType<Prisma.ToDoCreateOrConnectWithoutSubjectsInput> = z.object({
  where: z.lazy(() => ToDoWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ToDoCreateWithoutSubjectsInputSchema),z.lazy(() => ToDoUncheckedCreateWithoutSubjectsInputSchema) ]),
}).strict();
export default ToDoCreateOrConnectWithoutSubjectsInputSchema;