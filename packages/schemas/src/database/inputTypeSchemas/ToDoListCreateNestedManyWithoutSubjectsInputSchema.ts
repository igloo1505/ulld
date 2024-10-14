import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ToDoListCreateWithoutSubjectsInputSchema } from './ToDoListCreateWithoutSubjectsInputSchema';
import { ToDoListUncheckedCreateWithoutSubjectsInputSchema } from './ToDoListUncheckedCreateWithoutSubjectsInputSchema';
import { ToDoListCreateOrConnectWithoutSubjectsInputSchema } from './ToDoListCreateOrConnectWithoutSubjectsInputSchema';
import { ToDoListWhereUniqueInputSchema } from './ToDoListWhereUniqueInputSchema';

export const ToDoListCreateNestedManyWithoutSubjectsInputSchema: z.ZodType<Prisma.ToDoListCreateNestedManyWithoutSubjectsInput> = z.object({
  create: z.union([ z.lazy(() => ToDoListCreateWithoutSubjectsInputSchema),z.lazy(() => ToDoListCreateWithoutSubjectsInputSchema).array(),z.lazy(() => ToDoListUncheckedCreateWithoutSubjectsInputSchema),z.lazy(() => ToDoListUncheckedCreateWithoutSubjectsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ToDoListCreateOrConnectWithoutSubjectsInputSchema),z.lazy(() => ToDoListCreateOrConnectWithoutSubjectsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ToDoListWhereUniqueInputSchema),z.lazy(() => ToDoListWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ToDoListCreateNestedManyWithoutSubjectsInputSchema;
