import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ToDoListCreateWithoutSubjectsInputSchema } from '../ToDoListCreateWithoutSubjectsInputSchema.js';
import { ToDoListUncheckedCreateWithoutSubjectsInputSchema } from '../ToDoListUncheckedCreateWithoutSubjectsInputSchema.js';
import { ToDoListCreateOrConnectWithoutSubjectsInputSchema } from '../ToDoListCreateOrConnectWithoutSubjectsInputSchema.js';
import { ToDoListWhereUniqueInputSchema } from '../ToDoListWhereUniqueInputSchema.js';
export const ToDoListUncheckedCreateNestedManyWithoutSubjectsInputSchema: z.ZodType<Prisma.ToDoListUncheckedCreateNestedManyWithoutSubjectsInput> = z.object({
  create: z.union([ z.lazy(() => ToDoListCreateWithoutSubjectsInputSchema),z.lazy(() => ToDoListCreateWithoutSubjectsInputSchema).array(),z.lazy(() => ToDoListUncheckedCreateWithoutSubjectsInputSchema),z.lazy(() => ToDoListUncheckedCreateWithoutSubjectsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ToDoListCreateOrConnectWithoutSubjectsInputSchema),z.lazy(() => ToDoListCreateOrConnectWithoutSubjectsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ToDoListWhereUniqueInputSchema),z.lazy(() => ToDoListWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default ToDoListUncheckedCreateNestedManyWithoutSubjectsInputSchema;