import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoListWhereUniqueInputSchema } from '../ToDoListWhereUniqueInputSchema.js';
import { ToDoListCreateWithoutSubjectsInputSchema } from '../ToDoListCreateWithoutSubjectsInputSchema.js';
import { ToDoListUncheckedCreateWithoutSubjectsInputSchema } from '../ToDoListUncheckedCreateWithoutSubjectsInputSchema.js';
export const ToDoListCreateOrConnectWithoutSubjectsInputSchema: z.ZodType<Prisma.ToDoListCreateOrConnectWithoutSubjectsInput> = z.object({
  where: z.lazy(() => ToDoListWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ToDoListCreateWithoutSubjectsInputSchema),z.lazy(() => ToDoListUncheckedCreateWithoutSubjectsInputSchema) ]),
}).strict();
export default ToDoListCreateOrConnectWithoutSubjectsInputSchema;